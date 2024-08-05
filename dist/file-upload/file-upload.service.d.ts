import { FilesUploadRepository } from './file-upload-repository';
import { Products } from 'src/entities/products.entity';
import { Repository } from 'typeorm';
export declare class FileUploadService {
    private readonly filesRepository;
    private readonly productsRepository;
    constructor(filesRepository: FilesUploadRepository, productsRepository: Repository<Products>);
    uploadImage(file: Express.Multer.File, productId: string): Promise<Products>;
}
