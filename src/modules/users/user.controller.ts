import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './user.service';
import { UserEntity } from './entity/user.entity';
import { Crud, CrudController } from '@nestjsx/crud';

@Crud({
  model: {
    type: UserEntity,
  },
})
@Controller('api/v1/users')
@ApiTags('User')
export class UserController implements CrudController<UserEntity>{
  constructor(public service: UsersService) {}
}
