import { Categories } from "./categories.entity";
import { OrderDetails } from "./orderdetails.entity";
export declare class Products {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    orderDetails: OrderDetails[];
    category: Categories;
}
