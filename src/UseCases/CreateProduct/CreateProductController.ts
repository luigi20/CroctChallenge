import { Request, Response } from 'express';
import { CreateProductUseCase } from '../CreateProduct/CreateProductUseCase';

export class CreateProductController {
    constructor(private createProductUseCase: CreateProductUseCase) {

    }
    async handle(req: Request, res: Response): Promise<Response> {
        const { item, preco } = req.body;
        try {
            const product = await this.createProductUseCase.execute({ item, preco });
            return res.json(product);
        } catch (err) {
            return res.status(400).json({ error: err.message || 'Unexpected error' });
        }
    }
}