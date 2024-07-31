import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CommentPayload {
@ApiProperty({
 required: true,
 example: 'beautiful girl',
      })
  @IsString()
  @IsNotEmpty()
  content: string;
    static content: string;
}
