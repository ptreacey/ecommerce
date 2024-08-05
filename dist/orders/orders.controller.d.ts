import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dtos/orders.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    addOrder(order: CreateOrderDto): Promise<import("../entities/orders.entity").Orders[]>;
    getOrder(id: string): Promise<import("../entities/orders.entity").Orders>;
}
