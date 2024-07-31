import { Body, Controller, Param, Post, Request, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Public } from "../common/decorator/public.decorator";
import { Crud, CrudController } from "@nestjsx/crud";
import { CommentEntity } from "./entity/comment.entity";
import { CommentsService } from "./comments.service";
import { CommentPayload } from "./payload/comment.payload";
import { UsersService } from "../user";
import { AuthGuard } from "@nestjs/passport";

@Crud({
    model: {
        type: CommentEntity,
    }
})
@Controller('api/v1/comment')
@ApiTags('Comments')
@Public()
export class CommentsController implements CrudController<CommentEntity>{
    usersService: any;
    constructor(
        public service: CommentsService,
    ){}
    @UseGuards(AuthGuard('jwt'))
    @Post(':postId')
    async addComment(
        @Param('postId') postId: string,
        @Body() commentPayload: CommentPayload,
        @Request() req,
    ){
        const userId = req.user.id;
        return await this.service.addComment(postId, userId, commentPayload);
    }

}