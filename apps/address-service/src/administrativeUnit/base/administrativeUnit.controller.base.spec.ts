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
import { AdministrativeUnitController } from "../administrativeUnit.controller";
import { AdministrativeUnitService } from "../administrativeUnit.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  codeName: "exampleCodeName",
  codeNameEn: "exampleCodeNameEn",
  fullName: "exampleFullName",
  fullNameEn: "exampleFullNameEn",
  id: "exampleId",
  shortName: "exampleShortName",
  shortNameEn: "exampleShortNameEn",
};
const CREATE_RESULT = {
  codeName: "exampleCodeName",
  codeNameEn: "exampleCodeNameEn",
  fullName: "exampleFullName",
  fullNameEn: "exampleFullNameEn",
  id: "exampleId",
  shortName: "exampleShortName",
  shortNameEn: "exampleShortNameEn",
};
const FIND_MANY_RESULT = [
  {
    codeName: "exampleCodeName",
    codeNameEn: "exampleCodeNameEn",
    fullName: "exampleFullName",
    fullNameEn: "exampleFullNameEn",
    id: "exampleId",
    shortName: "exampleShortName",
    shortNameEn: "exampleShortNameEn",
  },
];
const FIND_ONE_RESULT = {
  codeName: "exampleCodeName",
  codeNameEn: "exampleCodeNameEn",
  fullName: "exampleFullName",
  fullNameEn: "exampleFullNameEn",
  id: "exampleId",
  shortName: "exampleShortName",
  shortNameEn: "exampleShortNameEn",
};

const service = {
  createAdministrativeUnit() {
    return CREATE_RESULT;
  },
  administrativeUnits: () => FIND_MANY_RESULT,
  administrativeUnit: ({ where }: { where: { id: string } }) => {
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

describe("AdministrativeUnit", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AdministrativeUnitService,
          useValue: service,
        },
      ],
      controllers: [AdministrativeUnitController],
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

  test("POST /administrativeUnits", async () => {
    await request(app.getHttpServer())
      .post("/administrativeUnits")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /administrativeUnits", async () => {
    await request(app.getHttpServer())
      .get("/administrativeUnits")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /administrativeUnits/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/administrativeUnits"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /administrativeUnits/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/administrativeUnits"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /administrativeUnits existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/administrativeUnits")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/administrativeUnits")
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
