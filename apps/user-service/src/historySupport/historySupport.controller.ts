import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HistorySupportService } from "./historySupport.service";
import { HistorySupportControllerBase } from "./base/historySupport.controller.base";
import { HistorySupport } from "./base/HistorySupport";
import { HistorySupportCreateInput } from "./base/HistorySupportCreateInput";
import { PrismaService } from "../prisma/prisma.service";
@swagger.ApiTags("historySupports")
@common.Controller("historySupports")
export class HistorySupportController extends HistorySupportControllerBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly service: HistorySupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
  @common.Post("/addUser")
  async addHistorySupport(
    @common.Request() req: any,
    @common.Body() data: HistorySupportCreateInput
  ): Promise<HistorySupport> {
    const user = JSON.parse(req.headers.user);
    const request = await this.prisma.user.findUnique({
      where: {id: user.sub}
    });
    console.log(request);
    if(request?.status === "Unavailable"){
      throw new Error("Hãy hoàn thành nhiệm vụ cũ trước khi làm nhiệm vụ mới");
    }
    await this.prisma.user.update({
      where: {id: user.sub},
      data: {
        status: "Unavailable"
      }
    })
    return await this.service.createHistorySupport({
      data: { ...data, userId: user.sub },
      select: {
        city: true,
        createdAt: true,
        description: true,
        district: true,
        fullname: true,
        id: true,
        phone: true,
        requestSupportId: true,
        updatedAt: true,
        userId: true,
        ward: true,
      },
    });
  }
  @common.Get("/bySupportRequest/:id")
  async bySupportRequest(@common.Param("id")id : string){
    try {
      return this.service.historySupports({
        where: {requestSupportId: id},
        select: {
          city: true,
          createdAt: true,
          description: true,
          district: true,
          fullname: true,
          id: true,
          phone: true,
          requestSupportId: true,
          updatedAt: true,
          userId: true,
          ward: true,
        },
      })
    } catch (error) {
        throw error
    }
  }
  @common.Get("/byUser")
  async byUser(
    @common.Request() req: any
  ): Promise<HistorySupport[]> {
    const user = JSON.parse(req.headers.user);
    return this.service.historySupports({
      where : {userId : user.sub},
      select: {
        city: true,
        createdAt: true,
        description: true,
        district: true,
        fullname: true,
        id: true,
        phone: true,
        requestSupportId: true,
        updatedAt: true,
        userId: true,
        ward: true,
      },
    });
  }
}
