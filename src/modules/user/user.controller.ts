import { Controller } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from "@nestjsx/crud";
import { UserEntity } from "./entity/user.entity";
import { UsersService } from "./user.service";
import { Roles } from "../common/decorator/roles.decorator";
import { AppRoles } from "../common/enum/roles.enum";
import { UserPayload } from "./payload/user.payload";
import { Public } from "../common/decorator/public.decorator";

@Crud({
  model: {
    type: UserEntity,
  },
  dto: {
    create: UserPayload,
  },
})
@Controller('api/v1/users')
@ApiTags('Users')
export class UserController implements CrudController<UserEntity>{
  constructor(public service: UsersService){}
  get base(): CrudController<UserEntity>{
    return this;
  }
@ApiBearerAuth()
@Roles(AppRoles.ADMINS)
@Override('deleteOneBase')
deleteOne(@ParsedRequest() req: CrudRequest){
  return this.base.deleteOneBase(req);
}
@Public()
@ApiBearerAuth()
// @Roles(AppRoles.ADMINS)
@Override('createOneBase')
async createOne(
  @ParsedRequest() req: CrudRequest,
  @ParsedBody() dto: UserEntity,
) {
  const user = await this.base.createOneBase(req, dto);
  return user;
}

@Public()
@Override('getManyBase')
getMany(@ParsedRequest() req: CrudRequest) {
  return this.base.getManyBase(req);
}

@Public()
@Override('getOneBase')
getOne(@ParsedRequest() req: CrudRequest) {
  return this.base.getOneBase(req);
}
}
