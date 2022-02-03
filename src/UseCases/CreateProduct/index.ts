import { ListProductRepository } from "../../repositories/implementations/ListProductRepository";
import { CreateProductController } from "./CreateProductController";
import { CreateProductUseCase } from "./CreateProductUseCase";

const listProductRepository = new ListProductRepository();
const createProductUseCase = new CreateProductUseCase(listProductRepository);
const createProductController = new CreateProductController(createProductUseCase);

export { createProductUseCase, createProductController }