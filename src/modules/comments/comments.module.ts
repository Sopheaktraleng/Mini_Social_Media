import { Module } from "@nestjs/common";
import { CommentsService } from "./comments.service";
import { CommentsController } from "./comments.controller";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentEntity } from "./entity/comment.entity";
import { PostEntity } from "../posts/entity/post.entity";
import { UserEntity } from "../user";

@Module({
    imports: [TypeOrmModule.forFeature([CommentEntity, PostEntity, UserEntity])],
    controllers: [CommentsController],
    providers: [CommentsService],
    exports: [CommentsService]
})
export class CommentsModule {}