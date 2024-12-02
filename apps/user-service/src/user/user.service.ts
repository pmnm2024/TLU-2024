import { BadRequestException, Inject, Injectable, forwardRef } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordService } from "../auth/password.service";
import { UserServiceBase } from "./base/user.service.base";
import { RabbitMQProducerService } from "src/rabbitmq/rabbitmq.producer.service";
import { Prisma, User } from "@prisma/client";
import { ResetPasswordOutput } from "./ResetPasswordOutput";
import { MyMessageBrokerTopics } from "src/rabbitmq/topics";
import { Cache } from "cache-manager";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { ConfigService } from "@nestjs/config";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService,
    @Inject(forwardRef(() => AuthService)) private readonly authService: AuthService,
    protected readonly rabbitProducer: RabbitMQProducerService,
    protected configService: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    super(prisma, passwordService);
  }

  async createUser(args: Prisma.UserCreateArgs): Promise<User> {

    if (!args.data.email || !args) {
      throw new Error("Please fill full")
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email: args.data.email }, // Assuming 'email' is unique
    });

    if (existingUser) {
      throw new Error("Email is already in use");
    }

    const createdUser = await this.prisma.user.create({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });

    // Prepare and return the output
    return createdUser
  }

  async forgotPassword(email: string): Promise<ResetPasswordOutput> {
    try {
      if (!email) {
        throw new BadRequestException("Email is required");
      }

      const user = await this.prisma.user.findUnique({
        where: { email: email },
      });

      if (!user) {
        throw new BadRequestException("User not found");
      }

      const genateToken = await this.authService.createToken(user.id, user.username, user.password)

      const ttl = 300000; // 5 minute
      await this.cacheManager.set(`auth-token:${user.id}`, genateToken, ttl);

      const urlForgot = `${this.configService.get('URL_SERVICE')}/api/user/reset-password`

      await this.prisma.$transaction([
        this.prisma.outBox.create({
          data: {
            eventType: MyMessageBrokerTopics.ResetPassword,
            payload: {
              userId: user.id,
              email: user.email,
              name: `${user.firstName} ${user.lastName}`,
              token: `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Password Reset Request</title>
                <style>
                  body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    background-color: #f4f4f4;
                    padding: 20px;
                  }
                  .email-container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  }
                  h1 {
                    color: #333;
                    font-size: 24px;
                  }
                  p {
                    font-size: 16px;
                    margin-bottom: 20px;
                  }
                  .button {
                    display: inline-block;
                    padding: 12px 24px;
                    background-color: #007bff;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 16px;
                    font-weight: bold;
                  }
                  .button:hover {
                    background-color: #0056b3;
                  }
                  .footer {
                    text-align: center;
                    font-size: 12px;
                    color: #888;
                    margin-top: 40px;
                  }
                </style>
              </head>
              <body>
                <div class="email-container">
                  <h1>Password Reset Request</h1>
                  <p>Hello ${user.firstName} ${user.lastName},</p>
                  <p>We received a request to reset your password for your account. If you didn't make this request, you can safely ignore this email.</p>
                  <p>To reset your password, please click the button below:</p>
                  <a href=${urlForgot} class="button">Reset Password</a>
                  <p>This link will expire in 24 hours for security purposes. If you do not reset your password within this time, you will need to request a new password reset.</p>
                  <div class="footer">
                    <p>If you did not request a password reset, please ignore this message or contact support if you have questions.</p>
                  </div>
                </div>
              </body>
              </html>`

            },
            retry: 3,
            status: "pending"
          },
        }),
      ]);

      return {
        success: true,
        message: "Forgot password success",
      };
    } catch (error) {
      throw error;
    }
  }

  async resetPassword(userId: string, passwordNew: string) {
    try {
      if (!userId) {
        throw new BadRequestException("Hackerr!!!")
      }
      const storedToken = await this.cacheManager.get<string>(`auth-token:${userId}`);

      if (!storedToken) {
        throw new BadRequestException('Token không hợp lệ hoặc đã hết hạn.');
      }

      const userCheck = await this.user({
        where: { id: userId },
        select: {
          address: true,
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phone: true,
          roles: true,
          sex: true,
          updatedAt: true,
          username: true,
        },
      })

      if (!userCheck) {
        throw new BadRequestException("User not found");
      }
      const decodedToken = await this.authService.decodeToken(storedToken) as any;
      console.log(decodedToken)
      await this.cacheManager.set(`blacklist:${decodedToken.jti}`, true, 60*60*24);

      const password = await this.passwordService.hash(passwordNew);

      await this.prisma.user.update({
        where: { id: userId },
        data: {
          password,
        },
      });
      await this.cacheManager.del(`auth-token:${userId}`);

      return;
    } catch (error: any) {
      throw new BadRequestException(error.message || 'Something went wrong during password reset');
    }
  }

}
