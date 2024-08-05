import { OrderDetails } from 'src/entities/orderdetails.entity';
import { Orders } from 'src/entities/orders.entity';
import { Products } from 'src/entities/products.entity';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
export declare class OrdersService {
    private ordersRepository;
    private orderDetailsRepository;
    private usersRepository;
    private productsRepository;
    constructor(ordersRepository: Repository<Orders>, orderDetailsRepository: Repository<OrderDetails>, usersRepository: Repository<Users>, productsRepository: Repository<Products>);
    addOrder(userId: string, products: any): Promise<Orders[]>;
    getOrder(id: string): Promise<Orders>;
}
