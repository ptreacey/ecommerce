import { Users } from 'src/entities/users.entity';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    getAuth(): string;
    signUp(user: Partial<Users>): Promise<{
        id: string;
        name: string;
        email: string;
        passwordConfirmation: string;
        phone: number;
        country: string;
        address: string;
        city: string;
        isAdmin?: boolean;
        orders: import("../entities/orders.entity").Orders[];
    }>;
    signIn(email: string, password: string): Promise<{
        message: string;
        token: string;
    }>;
}
