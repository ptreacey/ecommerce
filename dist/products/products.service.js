"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("../entities/products.entity");
const typeorm_2 = require("typeorm");
const categories_entity_1 = require("../entities/categories.entity");
const data = require("../data.json");
let ProductsService = class ProductsService {
    constructor(productsRepository, categoriesRepository) {
        this.productsRepository = productsRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async getProducts(page, limit) {
        let products = await this.productsRepository.find({
            relations: {
                category: true,
            }
        });
        const start = (page - 1) * limit;
        const end = start + +limit;
        products = products.slice(start, end);
        return products;
    }
    async getProduct(id) {
        const product = this.productsRepository.findOneBy({ id });
        if (!product) {
            return "Product not found";
        }
        return product;
    }
    async addProducts() {
        const categories = await this.categoriesRepository.find();
        data?.map(async (element) => {
            const category = categories.find((category) => category.name === element.category);
            const product = new products_entity_1.Products();
            product.name = element.name;
            product.description = element.description;
            product.price = element.price;
            product.imgUrl = element.imgUrl;
            product.stock = element.stock;
            product.category = category;
            await this.productsRepository
                .createQueryBuilder()
                .insert()
                .into(products_entity_1.Products)
                .values(product)
                .orUpdate(["description", "price", "imgUrl", "stock"], ["name"])
                .execute();
        });
        return "Products added";
    }
    async updateProduct(id, product) {
        await this.productsRepository.update(id, product);
        const updatedProduct = await this.productsRepository.findOneBy({ id });
        return updatedProduct;
    }
    async deleteProduct(id) {
        const product = await this.productsRepository.findOneBy({ id });
        this.productsRepository.remove(product);
        return product;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.Products)),
    __param(1, (0, typeorm_1.InjectRepository)(categories_entity_1.Categories)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map