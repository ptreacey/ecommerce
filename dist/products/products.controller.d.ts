import { ProductsService } from './products.service';
import { Products } from 'src/entities/products.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(page: number, limit: number): Promise<Products[]>;
    addProducts(): Promise<string>;
    getProduct(id: string): Promise<Products | "Product not found">;
    updateProduct(id: string, product: Products): Promise<Products>;
    deleteUser(id: string): Promise<Partial<Products>>;
}
