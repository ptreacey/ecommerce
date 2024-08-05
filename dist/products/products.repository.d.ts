type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: boolean;
    imgUrl: string;
};
export declare class ProductsRepository {
    private products;
    getProducts(page: number, limit: number): Product[];
    getProduct(id: number): Product;
    addProduct(product: Product): Product;
    updateProduct(id: number, product: Product): Product | "producto inexistente";
    deleteProduct(id: number): Product;
}
export {};
