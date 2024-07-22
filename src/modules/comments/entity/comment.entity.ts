import { CommonEntity } from "src/modules/common/entity/common";
import { Column, Entity } from "typeorm";

@Entity('Comment')
export class CommentEntity extends CommonEntity{
    @Column()
    content: string;
}