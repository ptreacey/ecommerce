import { Categories } from 'src/entities/categories.entity';
import { Repository } from 'typeorm';
export declare class CategoriesService {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Categories>);
    getCategories(): Promise<Categories[]>;
    addCategories(): Promise<string>;
}
