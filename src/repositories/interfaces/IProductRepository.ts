import { Product } from '../entities/Product';
export interface IProductRepository {

    create(product: Product): Promise<Product>;
    update(productUpdate: Product): Promise<Product>;
    readAll(): Promise<Product[]>;
    readOne(id: string): Promise<Product>;
    delete(id: string): Promise<number>;
}