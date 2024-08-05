import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from 'src/users/dtos/users.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAuth(): string;
    signUp(user: CreateUserDto): Promise<{
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
    signIn(credentials: LoginUserDto): Promise<{
        message: string;
        token: string;
    }>;
}
