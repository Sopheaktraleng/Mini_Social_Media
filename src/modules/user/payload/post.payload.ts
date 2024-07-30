import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class PostPayload {
  @ApiProperty({
    required: true,
    example: 'welcome to my post',
  })
  @IsString()
  content: string;
  @ApiProperty({
    example: 'gdagh',
  })
  @IsOptional()
  @IsString()
  imageUrl: string;
  @ApiProperty({
    example: 'affg',
  })
  @IsOptional()
  @IsString()
  videoUrl: string;
}
