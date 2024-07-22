import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { PostEntity } from "./entity/post.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
@Injectable()
export class PostsService extends TypeOrmCrudService<PostEntity>{
    constructor(
        @InjectRepository(PostEntity)
        private postsReponsitory: Repository<PostEntity>
    ){
        super(postsReponsitory);
    }
};