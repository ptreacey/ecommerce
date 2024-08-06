import { PickType } from "@nestjs/mapped-types"
import { ApiHideProperty } from "@nestjs/swagger"

import {
    Matches,
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
    MinLength,
    Validate,
    IsEmpty,
} from "class-validator"
import { MatchPassword } from "src/decorators/matchPassword.decorator"

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string

    /**
     * @example mail@mail.com
     */
    @IsNotEmpty()
    @IsEmail()
    email: string

    /**
     * @example Password@1
     */
    @IsNotEmpty()
    @IsString()
    @Matches(/^^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^&*])/, {
        message: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character."
    })
    @MinLength(8)
    @MaxLength(15)
    password: string

    /**
     * @example Password@1
     */
    @IsNotEmpty()
    @Validate(MatchPassword, ["password"])
    passwordConfirmation: string

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    address: string

    @IsNotEmpty()
    @IsNumber()
    phone: number

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    country: string

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    city: string

    @IsNotEmpty()
    @IsString()
    birthdate: string

    @IsEmpty()
    @ApiHideProperty()
    isAdmin?: boolean

}

export class LoginUserDto extends PickType(CreateUserDto, ["password", "email"]) {}