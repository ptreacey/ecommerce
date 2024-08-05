type User = {
    id: number;
    email: string;
    name: string;
    password: string;
    address: string;
    phone: string;
    country?: string | undefined;
    city?: string | undefined;
};
export declare class UsersRepository {
    private users;
    getUsers(page: number, limit: number): {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string | undefined;
        city?: string | undefined;
    }[];
    getUser(id: string): {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string | undefined;
        city?: string | undefined;
    };
    addUser(user: User): {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string | undefined;
        city?: string | undefined;
    };
    updateUSer(id: string, user: User): "usuario inexistente" | {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string | undefined;
        city?: string | undefined;
    };
    deleteUser(id: string): {
        id: number;
        email: string;
        name: string;
        address: string;
        phone: string;
        country?: string | undefined;
        city?: string | undefined;
    };
    getUserByEmail(email: string): User;
}
export {};
