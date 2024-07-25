import {
  Entity,
  Column,
  OneToMany,
} from 'typeorm';
import { PasswordTransformer } from '../password.transformer';
import { AppRoles } from '../../common/enum/roles.enum';
import { UsersType } from 'src/modules/common/enum/users-type.enum';
import { PostEntity } from 'src/modules/posts/entity/post.entity';
import { CommentEntity } from 'src/modules/comments/entity/comment.entity';
import { CommonEntity } from 'src/modules/common/entity/common';

@Entity({
  name: 'users',
})
export class UserEntity extends CommonEntity{
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
  @OneToMany(()=> PostEntity, (post) => post.user)
  posts: PostEntity[];
  @OneToMany(() => CommentEntity, (comment)=> comment.user)
  comments: CommentEntity[];
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


  /**
   * Omit password from query selection
   */
  toJSON() {
    const { password, ...self } = this;
    return self;
  }
}