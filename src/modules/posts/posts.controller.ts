import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { PostEntity } from "./entity/post.entity";
import { ApiTags } from "@nestjs/swagger";
import { Public } from "../common/decorator/public.decorator";
import { PostsService } from "./posts.service";
@Crud({
    model: {
        type: PostEntity,
    },
})
@Controller('api/v1/posts')
@ApiTags('Posts')
@Public()
export class PostsController implements CrudController<PostEntity> {
    constructor(public service: PostsService) {}
}
