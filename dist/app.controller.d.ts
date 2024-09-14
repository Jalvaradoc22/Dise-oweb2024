import { AppService } from './app.service';
import { CreateProductDto } from './create.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: AppService);
    findAll(): Promise<import("./product.entity").Product[]>;
    findOne(id: string): Promise<import("./product.entity").Product>;
    create(createProductDto: CreateProductDto): Promise<import("./product.entity").Product>;
    update(id: string, updateProductDto: CreateProductDto): Promise<import("./product.entity").Product>;
    remove(id: string): Promise<void>;
}
