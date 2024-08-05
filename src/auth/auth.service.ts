import { BadRequestException, Injectable } from '@nestjs/common';
import { Users } from 'src/entities/users.entity';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ){}
    getAuth() {
        return "auth"
    }

    async signUp(user: Partial<Users>) {

        const {email, password} = user

        const foundUser = await this.usersService.getUserByEmail(email)

        if (foundUser) {
            throw new BadRequestException("user already registered")
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        if (!hashedPassword) {
            throw new BadRequestException("Encriptation failed")
        }
        
        return await this.usersService.addUser({
            ...user,
            password:hashedPassword
        })
    }

    async signIn(email: string, password: string) {
        const foundUser = await this.usersService.getUserByEmail(email)
        
        if (!foundUser) {
            throw new BadRequestException("Invalid credentials")
        }
         
        const isPasswordValid = await bcrypt.compare(password, foundUser.password)

        if (isPasswordValid) {
            throw new BadRequestException("Invalid password")
        }

        const userPayload = {
            id: foundUser.id,
            email: foundUser.email,
            isAdmin: foundUser.isAdmin
        }

        const token = this.jwtService.sign({userPayload})

        return {
            message: "User logged in succesfully",
            token
        }
    }
}
