import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
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
    addUser(user: Partial<Users>): Promise<{
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
    updateUser(id: string, user: Partial<Users>): Promise<{
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
    deleteUser(id: string): Promise<Partial<Users>>;
    getUserByEmail(email: string): Promise<Users>;
}
