import { CommentEntity } from "src/modules/comments/entity/comment.entity";
import { CommonEntity } from "src/modules/common/entity/common";
import { UserEntity } from "src/modules/user";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity('Post')
export class PostEntity extends CommonEntity{
    @Column()
    content: string;
    @Column({ nullable: true })
    imageUrl: string;
    @Column({ nullable: true })
    videoUrl: string;
    @ManyToOne(() => UserEntity, (user) => user.posts)
    @JoinColumn({ name: 'UserId'})
    user: string;
}