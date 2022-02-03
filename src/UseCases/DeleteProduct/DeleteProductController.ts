import { Request, Response } from 'express';
import { DeleteProductUseCase } from './DeleteProductUseCase';
import { IAPIStackOutDTO } from './IAPIStackOutDTO';
import api from 'axios';

export class DeleteProductController {
    constructor(private deleteProductUseCase: DeleteProductUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const url = `http://api.ipstack.com/177.39.56.6?access_key=${process.env.ACCESS_KEY}`;
            const { data: dadosAPIStack } = await api.get<IAPIStackOutDTO>(url);
            const { ip, country_name, region_name, latitude, longitude, city } = dadosAPIStack;
            return res.json();
        } catch (err) {
            return res.status(400).json({ error: err.message || 'Unexpected error' });
        }
    }
}