import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UserPayload {
  @ApiProperty({
    required: true,
    example: 'traa123',
  })
  @IsString()
  username: string;
  @ApiProperty({
    required: true,
    example: 'traa123@gmail.com',
  })
  @IsString()
  email: string;
  @ApiProperty({
    required: true,
    example: 'Leng Sopheaktra',
  })
  @IsString()
  name: string;
  @ApiProperty({
    required: true,
    example: '123456789',
  })
  @IsString()
  password: string;
}
