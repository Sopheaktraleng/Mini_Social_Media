import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Public } from "../common/decorator/public.decorator";
import { Crud, CrudController } from "@nestjsx/crud";
import { CommentEntity } from "./entity/comment.entity";
import { CommentsService } from "./comments.service";

@Crud({
    model: {
        type: CommentEntity,
    }
})
@Controller('api/v1/comment')
@ApiTags('Comments')
@Public()
export class CommentsController implements CrudController<CommentEntity>{
    constructor(public service: CommentsService){}
}