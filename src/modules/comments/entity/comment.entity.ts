import { CommonEntity } from "src/modules/common/entity/common";
import { PostEntity } from "src/modules/posts/entity/post.entity";
import { UserEntity } from "src/modules/user";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity('Comment')
export class CommentEntity extends CommonEntity{
    @Column()
    content: string;
    @ManyToOne(()=> UserEntity, (user)=>user.comments)
    user: string;
}