"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
let ProductsRepository = class ProductsRepository {
    constructor() {
        this.products = [
            {
                id: 1,
                name: "Laptop",
                description: "Laptop de alta performance con 16GB de RAM y 512GB SSD.",
                price: 1200.00,
                stock: true,
                imgUrl: "https://example.com/laptop.jpg"
            },
            {
                id: 2,
                name: "Smartphone",
                description: "Smartphone con pantalla AMOLED y cámara de 108MP.",
                price: 800.00,
                stock: true,
                imgUrl: "https://example.com/smartphone.jpg"
            },
            {
                id: 3,
                name: "Auriculares",
                description: "Auriculares inalámbricos con cancelación de ruido.",
                price: 150.00,
                stock: false,
                imgUrl: "https://example.com/auriculares.jpg"
            },
            {
                id: 4,
                name: "Monitor",
                description: "Monitor 4K de 27 pulgadas con HDR.",
                price: 400.00,
                stock: true,
                imgUrl: "https://example.com/monitor.jpg"
            },
            {
                id: 5,
                name: "Teclado Mecánico",
                description: "Teclado mecánico con retroiluminación RGB.",
                price: 100.00,
                stock: true,
                imgUrl: "https://example.com/teclado.jpg"
            },
            {
                id: 6,
                name: "Mouse Gamer",
                description: "Mouse gamer con sensor óptico de alta precisión.",
                price: 60.00,
                stock: false,
                imgUrl: "https://example.com/mouse.jpg"
            },
            {
                id: 7,
                name: "Tablet",
                description: "Tablet con pantalla de 10 pulgadas y 64GB de almacenamiento.",
                price: 300.00,
                stock: true,
                imgUrl: "https://example.com/tablet.jpg"
            },
            {
                id: 8,
                name: "Impresora",
                description: "Impresora multifunción con conectividad Wi-Fi.",
                price: 200.00,
                stock: true,
                imgUrl: "https://example.com/impresora.jpg"
            },
            {
                id: 9,
                name: "Cámara",
                description: "Cámara digital con lente intercambiable y 24MP.",
                price: 500.00,
                stock: false,
                imgUrl: "https://example.com/camara.jpg"
            },
            {
                id: 10,
                name: "Smartwatch",
                description: "Smartwatch con monitor de ritmo cardíaco y GPS.",
                price: 250.00,
                stock: true,
                imgUrl: "https://example.com/smartwatch.jpg"
            }
        ];
    }
    getProducts(page, limit) {
        const start = (page - 1) * limit;
        const end = start + limit;
        const products = this.products.slice(start, end);
        return products;
    }
    getProduct(id) {
        const products = this.products.find((user) => user.id === +id);
        return products;
    }
    addProduct(product) {
        const id = this.products.length + 1;
        product.id = id;
        this.products.push(product);
        return product;
    }
    updateProduct(id, product) {
        const oldProduct = this.products.find((user) => user.id === +id);
        if (!oldProduct) {
            return "producto inexistente";
        }
        const updatedProduct = { ...oldProduct, ...product };
        const index = this.products.findIndex((product) => product.id === +id);
        this.products[index] = updatedProduct;
        return product;
    }
    deleteProduct(id) {
        const index = this.products.findIndex((product) => product.id === +id);
        const product = this.products[index];
        this.products.splice(index, 1);
        return product;
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)()
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map