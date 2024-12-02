import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { AdministrativeRegionController } from "../administrativeRegion.controller";
import { AdministrativeRegionService } from "../administrativeRegion.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  codeName: "exampleCodeName",
  codeNameEn: "exampleCodeNameEn",
  id: "exampleId",
  name: "exampleName",
  nameEn: "exampleNameEn",
};
const CREATE_RESULT = {
  codeName: "exampleCodeName",
  codeNameEn: "exampleCodeNameEn",
  id: "exampleId",
  name: "exampleName",
  nameEn: "exampleNameEn",
};
const FIND_MANY_RESULT = [
  {
    codeName: "exampleCodeName",
    codeNameEn: "exampleCodeNameEn",
    id: "exampleId",
    name: "exampleName",
    nameEn: "exampleNameEn",
  },
];
const FIND_ONE_RESULT = {
  codeName: "exampleCodeName",
  codeNameEn: "exampleCodeNameEn",
  id: "exampleId",
  name: "exampleName",
  nameEn: "exampleNameEn",
};

const service = {
  createAdministrativeRegion() {
    return CREATE_RESULT;
  },
  administrativeRegions: () => FIND_MANY_RESULT,
  administrativeRegion: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("AdministrativeRegion", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AdministrativeRegionService,
          useValue: service,
        },
      ],
      controllers: [AdministrativeRegionController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /administrativeRegions", async () => {
    await request(app.getHttpServer())
      .post("/administrativeRegions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /administrativeRegions", async () => {
    await request(app.getHttpServer())
      .get("/administrativeRegions")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /administrativeRegions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/administrativeRegions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /administrativeRegions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/administrativeRegions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /administrativeRegions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/administrativeRegions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/administrativeRegions")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
