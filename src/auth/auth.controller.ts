import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from 'src/users/dtos/users.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("AUTH")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getAuth(): string {
    return this.authService.getAuth();
  }

  @Post("/signup")
  signUp(@Body()user: CreateUserDto) {
    return this.authService.signUp(user)
  }

  @Post("/signin")
  signIn(@Body() credentials: LoginUserDto) {
    const {email, password} = credentials
    return this.authService.signIn(email, password)
  }
}
