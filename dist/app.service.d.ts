import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './create.dto';
export declare class AppService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(createProductDto: CreateProductDto): Promise<Product>;
    update(id: string, updateProductDto: CreateProductDto): Promise<Product>;
    remove(id: string): Promise<void>;
}
