import { ApiProperty } from '@nestjs/swagger';

export class UserPayload {
  @ApiProperty({
    required: true,
    example: 'traa123',
  })
  username: string;
  @ApiProperty({
    required: true,
    example: 'traa123@gmail.com',
  })
  email: string;
  @ApiProperty({
    required: true,
    example: 'Leng Sopheaktra',
  })
  name: string;
  @ApiProperty({
    required: true,
    example: '123456789',
  })
  password: string;
}
