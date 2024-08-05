"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
let UsersRepository = class UsersRepository {
    constructor() {
        this.users = [
            {
                id: 1,
                email: "juan.perez@example.com",
                name: "Juan Perez",
                password: "password123",
                address: "Calle Falsa 123",
                phone: "+54 9 11 1234-5678",
                country: "Argentina",
                city: "Buenos Aires"
            },
            {
                id: 2,
                email: "maria.gomez@example.com",
                name: "Maria Gomez",
                password: "securepass456",
                address: "Avenida Siempre Viva 742",
                phone: "+54 9 11 8765-4321",
                country: "Argentina",
                city: "Rosario"
            },
            {
                id: 3,
                email: "pedro.lopez@example.com",
                name: "Pedro Lopez",
                password: "mypassword789",
                address: "Calle de la Luna 456",
                phone: "+54 9 11 2345-6789",
                country: "Argentina",
                city: "Córdoba"
            },
            {
                id: 4,
                email: "ana.martinez@example.com",
                name: "Ana Martinez",
                password: "ana12345",
                address: "Calle del Sol 789",
                phone: "+54 9 11 3456-7890",
                country: "Argentina",
                city: "Mendoza"
            },
            {
                id: 5,
                email: "luis.garcia@example.com",
                name: "Luis Garcia",
                password: "luispassword",
                address: "Avenida Libertador 1234",
                phone: "+54 9 11 4567-8901",
                country: "Argentina",
                city: "La Plata"
            },
            {
                id: 6,
                email: "sofia.fernandez@example.com",
                name: "Sofia Fernandez",
                password: "sofia2021",
                address: "Calle de los Sueños 321",
                phone: "+54 9 11 5678-9012",
                country: "Argentina",
                city: "Mar del Plata"
            },
            {
                id: 7,
                email: "carlos.rodriguez@example.com",
                name: "Carlos Rodriguez",
                password: "carlospass",
                address: "Avenida de Mayo 654",
                phone: "+54 9 11 6789-0123",
                country: "Argentina",
                city: "Salta"
            },
            {
                id: 8,
                email: "laura.sanchez@example.com",
                name: "Laura Sanchez",
                password: "laura2022",
                address: "Calle de la Paz 987",
                phone: "+54 9 11 7890-1234",
                country: "Argentina",
                city: "San Juan"
            },
            {
                id: 9,
                email: "diego.ramirez@example.com",
                name: "Diego Ramirez",
                password: "diego123",
                address: "Avenida Rivadavia 3210",
                phone: "+54 9 11 8901-2345",
                country: "Argentina",
                city: "Santa Fe"
            },
            {
                id: 10,
                email: "valeria.torres@example.com",
                name: "Valeria Torres",
                password: "valeria2023",
                address: "Calle de la Amistad 654",
                phone: "+54 9 11 9012-3456",
                country: "Argentina",
                city: "Tucumán"
            }
        ];
    }
    getUsers(page, limit) {
        const start = (page - 1) * limit;
        const end = start + limit;
        const users = this.users.slice(start, end);
        return users.map(({ password, ...user }) => user);
    }
    getUser(id) {
        const user = this.users.find((user) => user.id === +id);
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    addUser(user) {
        const id = this.users.length + 1;
        user.id = id;
        this.users.push(user);
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    updateUSer(id, user) {
        const oldUser = this.users.find((user) => user.id === +id);
        if (!oldUser) {
            return "usuario inexistente";
        }
        const updatedUser = { ...oldUser, ...user };
        const index = this.users.findIndex((user) => user.id === +id);
        this.users[index] = updatedUser;
        const { password, ...userWithoutPassword } = updatedUser;
        return userWithoutPassword;
    }
    deleteUser(id) {
        const index = this.users.findIndex((user) => user.id === +id);
        const user = this.users[index];
        this.users.splice(index, 1);
        const { password, ...UserWithoutPassword } = user;
        return UserWithoutPassword;
    }
    getUserByEmail(email) {
        return this.users.find((user) => user.email === email);
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)()
], UsersRepository);
//# sourceMappingURL=users.repository.js.map