import { IProductRepository } from '../interfaces/IProductRepository';
import { Product } from '../../entities/Product';

export class ListProductRepository implements IProductRepository {

    private static listProducts: Product[] = [];
    //utilizando lista estática para persistência dos dados
    async create(product: Product): Promise<Product> {
        ListProductRepository.listProducts.push(product);
        return product;
    }

    async update(productUpdate: Product): Promise<Product> {
        const index = ListProductRepository.listProducts.findIndex(product => product.id === productUpdate.id);
        if (index === -1) {
            throw new Error("Product Not Found");
        }
        ListProductRepository.listProducts[index] = productUpdate;
        console.log(ListProductRepository.listProducts);
        return productUpdate;
    }

    async readAll(): Promise<Product[]> {
        return ListProductRepository.listProducts;
    }

    async readOne(id: string): Promise<Product> {
        const product = ListProductRepository.listProducts.find(product => product.id === id);
        return product;
    }

    async delete(id: string): Promise<number> {
        const index = ListProductRepository.listProducts.findIndex(product => product.id === id);
        if (index !== -1) {
            ListProductRepository.listProducts.splice(index, 1);
        }

        return index;
    }
}