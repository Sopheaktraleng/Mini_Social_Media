import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { CommentEntity } from "./entity/comment.entity";
import { Repository } from "typeorm";

@Injectable()
export class CommentsService extends TypeOrmCrudService<CommentEntity>{
    constructor(
        @InjectRepository(CommentEntity)
        private commentsRepository: Repository<CommentEntity>
    ){
        super(commentsRepository);
    }
}