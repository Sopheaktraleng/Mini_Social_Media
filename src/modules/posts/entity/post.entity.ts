import { CommonEntity } from "src/modules/common/entity/common";
import { Column, Entity } from "typeorm";

@Entity('Post')
export class PostEntity extends CommonEntity{
    @Column()
    content: string;
}