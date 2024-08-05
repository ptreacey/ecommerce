import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>){}

    async getUsers(page: number, limit: number){
        let users = await this.usersRepository.find()
        const start = (page -1) * limit
        const end = start + +limit

        users = users.slice(start, end)

        return users.map(({password, ...user}) => user)
    }

    async getUser(id: string) {
        let user = await this.usersRepository.findOne({
            where: { id },
            relations: {
                orders: true
            }
        })

        if (!user) {
            throw new NotFoundException()
        }

        const { password, ...userWithoutPassword } = user

        return userWithoutPassword

    }

    async addUser(user: Partial<Users>) {
        const newUser = await this.usersRepository.save(user)

        const { password, ...userWithoutPassword } = newUser

        return userWithoutPassword
    }

    async updateUser(id: string, user: Partial<Users>) {
        await this.usersRepository.update(id, user)

        const updatedUser = await this.usersRepository.findOneBy({ id })

        const { password, ...userWithoutPassword } = updatedUser

        return userWithoutPassword
    }

    async deleteUser(id: string): Promise<Partial<Users>> {
        const user = await this.usersRepository.findOneBy({ id })

        this.usersRepository.remove(user)

        const { password, ...userWithouthPassword } = user

        return userWithouthPassword
    }

    async getUserByEmail(email: string) {
        return await this.usersRepository.findOneBy({email})
    }
}
