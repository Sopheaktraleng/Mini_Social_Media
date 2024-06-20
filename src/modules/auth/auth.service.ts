import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Hash } from '../../utils/Hash';
import { UserEntity, UsersService } from '../user';
import { LoginPayload } from './payloads/login.payload';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly userService: UsersService,
    private readonly httpService: HttpService,
  ) {}

  async createToken(user: UserEntity) {
    return {
      expiresIn: this.configService.get<string>('JWT_EXPIRATION_TIME'),
      accessToken: this.jwtService.sign({ id: user.id }),
      user,
    };
  }

  async validateUser(payload: LoginPayload): Promise<UserEntity> {
    const user = await this.userService.getByUsername(payload.username);
    if (!user || !Hash.compare(payload.password, user.password)) {
      throw new UnauthorizedException('Username or Password is not correct!');
    }
    return user;
  }
  async registerGoogleUser(code: any): Promise<any> {
    // Get code to exchange access_token to call googleapi
    // -> use access_token to get userinfo (email, name, date of birth, photo)
    // If no user with email, register user on our own database
    // If user already existed, create JWT token
    // return JWT token back
    const { data } = await this.httpService.axiosRef.post(
      'https://oauth2.googleapis.com/token',
      {
        client_id: this.configService.get('GOOGLE_CLIENT_ID'),
        client_secret: this.configService.get('GOOGLE_CLIENT_SECRET'),
        code: code,
        redirect_uri: this.configService.get('GOOGLE_CALLBACK'),
        grant_type: 'authorization_code',
      },
    );
}
}
