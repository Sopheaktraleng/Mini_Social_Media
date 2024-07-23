import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { PasswordTransformer } from '../password.transformer';
import { AppRoles } from '../../common/enum/roles.enum';
import { UsersType } from 'src/modules/common/enum/users-type.enum';
import { PostEntity } from 'src/modules/posts/entity/post.entity';
import { CommentEntity } from 'src/modules/comments/entity/comment.entity';

@Entity({
  name: 'users',
})
export class UserEntity {
  /**
   * UUID column
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Unique username column
   */
  @Column({ length: 255, unique: true })
  username: string;

  /**
   * Name column
   */
  @Column({ type: 'text' })
  name: string;

  /**
   * Email colum
   */
  @Column({ type: 'text', unique: true })
  email: string;

  @Column({
    type: 'simple-array',
    enum: AppRoles,
    default: AppRoles.DEFAULT,
  })
  roles: AppRoles[];

  /**
   * created date column
   */
  @CreateDateColumn()
  createdDate: Date;

  /**
   * updated date column
   */
  @UpdateDateColumn()
  updatedDate: Date;

  /**
   * delete date column
   */
  @DeleteDateColumn()
  deletedDate: Date;

  /**
   * Password column
   */
  @Column({
    name: 'password',
    length: 255,
    transformer: new PasswordTransformer(),
  })
  password: string;

  @Column({
    type: 'enum',
    enum: UsersType,
    default: UsersType.PASSWORD,
  })
  userType: string;

  @Column({ type: 'text', nullable: true })
  picture: string;

  @OneToMany(()=> PostEntity, (post) => post.user)
  posts: PostEntity[];
  @OneToMany(() => CommentEntity, (comment)=> comment.user)
  comments: CommentEntity[];

  /**
   * Omit password from query selection
   */
  toJSON() {
    const { password, ...self } = this;
    return self;
  }
}