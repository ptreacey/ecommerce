import { Orders } from "./orders.entity";
export declare class Users {
    id: string;
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    phone: number;
    country: string;
    address: string;
    city: string;
    isAdmin?: boolean;
    orders: Orders[];
}
