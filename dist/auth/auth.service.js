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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    getAuth() {
        return "auth";
    }
    async signUp(user) {
        const { email, password } = user;
        const foundUser = await this.usersService.getUserByEmail(email);
        if (foundUser) {
            throw new common_1.BadRequestException("user already registered");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        if (!hashedPassword) {
            throw new common_1.BadRequestException("Encriptation failed");
        }
        return await this.usersService.addUser({
            ...user,
            password: hashedPassword
        });
    }
    async signIn(email, password) {
        const foundUser = await this.usersService.getUserByEmail(email);
        if (!foundUser) {
            throw new common_1.BadRequestException("Invalid credentials");
        }
        const isPasswordValid = await bcrypt.compare(password, foundUser.password);
        if (isPasswordValid) {
            throw new common_1.BadRequestException("Invalid password");
        }
        const userPayload = {
            id: foundUser.id,
            email: foundUser.email,
            isAdmin: foundUser.isAdmin
        };
        const token = this.jwtService.sign({ userPayload });
        return {
            message: "User logged in succesfully",
            token
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map