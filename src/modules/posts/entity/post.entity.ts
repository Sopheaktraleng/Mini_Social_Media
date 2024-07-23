import { CommentEntity } from "src/modules/comments/entity/comment.entity";
import { CommonEntity } from "src/modules/common/entity/common";
import { UserEntity } from "src/modules/users";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity('Post')
export class PostEntity extends CommonEntity{
    @Column()
    content: string;
    @ManyToOne(() => UserEntity, (user) => user.posts)
    user: UserEntity
    @OneToMany(()=>CommentEntity, (comment)=> comment.post)
    comments: CommentEntity[];
}