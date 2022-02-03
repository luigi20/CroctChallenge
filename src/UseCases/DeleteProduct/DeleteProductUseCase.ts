import { IProductRepository } from "../../repositories/interfaces/IProductRepository";
export class DeleteProductUseCase {
    constructor(private productRepository: IProductRepository) { }

    async execute(idProduto: string) {

        const index = await this.productRepository.delete(idProduto);
        if (index === -1) {
            throw new Error("Product Not Registered");
        }
    }
}