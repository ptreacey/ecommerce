import { Products } from 'src/entities/products.entity';
import { Repository } from 'typeorm';
import { Categories } from 'src/entities/categories.entity';
export declare class ProductsService {
    private productsRepository;
    private categoriesRepository;
    constructor(productsRepository: Repository<Products>, categoriesRepository: Repository<Categories>);
    getProducts(page: number, limit: number): Promise<Products[]>;
    getProduct(id: string): Promise<Products | "Product not found">;
    addProducts(): Promise<string>;
    updateProduct(id: string, product: Products): Promise<Products>;
    deleteProduct(id: string): Promise<Partial<Products>>;
}
