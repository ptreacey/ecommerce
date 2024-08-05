export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    address: string;
    phone: number;
    country: string;
    city: string;
    isAdmin?: boolean;
}
declare const LoginUserDto_base: import("@nestjs/mapped-types").MappedType<Pick<CreateUserDto, "password" | "email">>;
export declare class LoginUserDto extends LoginUserDto_base {
}
export {};
