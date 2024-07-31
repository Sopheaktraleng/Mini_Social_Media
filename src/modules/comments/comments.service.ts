import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { CommentEntity } from "./entity/comment.entity";
import { Repository } from "typeorm";
import { PostEntity } from "../posts/entity/post.entity";
import { CommentPayload } from "./payload/comment.payload";

@Injectable()
export class CommentsService extends TypeOrmCrudService<CommentEntity>{
    constructor(
        @InjectRepository(CommentEntity)
        private readonly commentsRepository: Repository<CommentEntity>,
        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>,
    ){
        super(commentsRepository);
    }
    async addComment(postId: string, userId: string, commentPayload:CommentPayload): Promise<CommentEntity>{
        const post = await this.postRepository.findOne(postId);
        const comment = this.commentsRepository.create({
            content: CommentPayload.content,
            post,
        });
        await this.commentsRepository.save(comment);
        return comment;
    }

}