import { Body, Controller, Get, Param, Post, Query, Put, Delete, UseGuards  } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateUserDto } from './dtos/users.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from '../roles.enum';
import { RolesGuard } from 'src/guards/roles.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags("USERS")
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @ApiBearerAuth()
  @Get()
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  getUsers(@Query("page") page: number, @Query("limit") limit: number){

    if (page && limit) {

      return this.usersService.getUsers(page, limit);
    }
    else{
      return this.usersService.getUsers(1, 3)
    }
  }

  @ApiBearerAuth()
  @Get(":id")
  @UseGuards(AuthGuard)
  getUser(@Param("id") id: string){
    return this.usersService.getUser(id)
  }

  @Post()
  addUSer(@Body() user: CreateUserDto) {
    return this.usersService.addUser(user)
  }

  @ApiBearerAuth()
  @Put(":id")
  @UseGuards(AuthGuard)
  updateUser(@Param("id") id: string, @Body() user: CreateUserDto) {
    return this.usersService.updateUser(id, user)
  }

  @ApiBearerAuth()
  @Delete(":id")
  @UseGuards(AuthGuard)
  deleteUser(@Param("id") id: string) {
    return this.usersService.deleteUser(id)
  }
}
