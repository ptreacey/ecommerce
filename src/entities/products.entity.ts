import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categories } from "./categories.entity";
import { OrderDetails } from "./orderdetails.entity";

@Entity({
    name: "PRODUCTS"
})
export class Products {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({
        type: "varchar",
        length: 50,
        unique: true,
        nullable: false
    })
    name: string

    @Column({
        type: "text",
        nullable: false
    })
    description: string

    @Column({
        type: "numeric",
        precision: 10,
        scale: 2,
        nullable: false
        
    })
    price: number

    @Column({
        type: "int",
        nullable: false
    })
    stock: number

    @Column({
        type: "varchar",
        nullable: false
    })
    imgUrl: string
    
    @ManyToMany(() => OrderDetails, (orderDetails) => orderDetails.products)
    @JoinTable()
    orderDetails: OrderDetails[]

    @ManyToOne(() => Categories, (category) => category.products)
    @JoinColumn({ name: "category_id"})
    category: Categories
}