import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(page: number, limit: number): Promise<{
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
    }[]>;
    getUser(id: string): Promise<{
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
    addUSer(user: CreateUserDto): Promise<{
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
    updateUser(id: string, user: CreateUserDto): Promise<{
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
    deleteUser(id: string): Promise<Partial<import("../entities/users.entity").Users>>;
}
