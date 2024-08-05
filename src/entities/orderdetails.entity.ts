import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Orders } from "./orders.entity";
import { Products } from "./products.entity";

@Entity({
    name: "ORDERDETAILS"
})
export class OrderDetails {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        type: "numeric",
        precision: 10,
        scale: 2
    })
    price: number

    @OneToOne(() => Orders, (order) => order.orderDetails)
    @JoinColumn({ name: "order_id" })
    order: Orders

    @ManyToMany(() => Products)
    @JoinTable({
        name: "ORDER_DETAILS_PRODUCTS"
    })
    products: Products[]
}