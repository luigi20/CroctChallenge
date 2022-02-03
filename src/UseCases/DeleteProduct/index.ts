import { ListProductRepository } from "../../repositories/implementations/ListProductRepository";
import { DeleteProductController } from "./DeleteProductController";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

const listProductRepository = new ListProductRepository();
const deleteProductUseCase = new DeleteProductUseCase(listProductRepository);
const deleteProductController = new DeleteProductController(deleteProductUseCase);

export { deleteProductUseCase, deleteProductController }