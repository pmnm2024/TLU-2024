import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordService } from "../auth/password.service";
import { UserServiceBase } from "./base/user.service.base";
import { RabbitMQProducerService } from "src/rabbitmq/rabbitmq.producer.service";
import { Prisma, User } from "@prisma/client";
import { ResetPasswordOutput } from "./ResetPasswordOutput";
import { MyMessageBrokerTopics } from "src/rabbitmq/topics";
import { TokenService } from "src/auth/token.service";

@Injectable()
export class UserService extends UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    protected readonly rabbitProducer: RabbitMQProducerService
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

  // async resetPassword(email: string): Promise<ResetPasswordOutput> {
  //   const session = await this.prisma.$transaction();
  //   try {
  //     if (!email) {
  //       throw new Error("Email is require")
  //     }

  //     const user = await this.prisma.user.findUnique({
  //       where: { email: email },
  //     });

  //     if (!user) {
  //       throw new Error("User not found")
  //     }

  //     // const accessToken = await this.tokenService.createToken({
  //     //   id: user.id,
  //     //   username: user.username,
  //     //   password: user.password,
  //     // });

  //     await this.rabbitProducer.emitMessage(MyMessageBrokerTopics.ResetPassword,
  //       {
  //         userId: user.id,
  //         email: user.email,
  //         name: `${user.firstName} ${user.lastName}`,
  //         token: 'accessToken'
  //       }
  //     )

  //     return {
  //       success: true,
  //       message: "Forgot password success"
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  async resetPassword(email: string): Promise<ResetPasswordOutput> {
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
  
      await this.prisma.$transaction([
        this.prisma.outBox.create({
          data: {
            eventType: MyMessageBrokerTopics.ResetPassword,
            payload: {
              userId: user.id,
              email: user.email,
              name: `${user.firstName} ${user.lastName}`,
              token: 'accessToken1', 

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
  
}
