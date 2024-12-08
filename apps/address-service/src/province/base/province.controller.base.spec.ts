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
import { ProvinceController } from "../province.controller";
import { ProvinceService } from "../province.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  code: "exampleCode",
  codeName: "exampleCodeName",
  fullName: "exampleFullName",
  fullNameEn: "exampleFullNameEn",
  id: "exampleId",
  name: "exampleName",
  nameEn: "exampleNameEn",
};
const CREATE_RESULT = {
  code: "exampleCode",
  codeName: "exampleCodeName",
  fullName: "exampleFullName",
  fullNameEn: "exampleFullNameEn",
  id: "exampleId",
  name: "exampleName",
  nameEn: "exampleNameEn",
};
const FIND_MANY_RESULT = [
  {
    code: "exampleCode",
    codeName: "exampleCodeName",
    fullName: "exampleFullName",
    fullNameEn: "exampleFullNameEn",
    id: "exampleId",
    name: "exampleName",
    nameEn: "exampleNameEn",
  },
];
const FIND_ONE_RESULT = {
  code: "exampleCode",
  codeName: "exampleCodeName",
  fullName: "exampleFullName",
  fullNameEn: "exampleFullNameEn",
  id: "exampleId",
  name: "exampleName",
  nameEn: "exampleNameEn",
};

const service = {
  createProvince() {
    return CREATE_RESULT;
  },
  provinces: () => FIND_MANY_RESULT,
  province: ({ where }: { where: { id: string } }) => {
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

describe("Province", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProvinceService,
          useValue: service,
        },
      ],
      controllers: [ProvinceController],
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

  test("POST /provinces", async () => {
    await request(app.getHttpServer())
      .post("/provinces")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /provinces", async () => {
    await request(app.getHttpServer())
      .get("/provinces")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /provinces/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/provinces"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /provinces/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/provinces"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /provinces existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/provinces")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/provinces")
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
