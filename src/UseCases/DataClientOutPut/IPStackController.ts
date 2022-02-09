import { Request, Response } from 'express';
import { IPStackUseCase } from './IPStackUseCase';

export class IPStackController {
  constructor(private ipStackControllerUseCase: IPStackUseCase) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id, ip, time } = req.body;
    try {
      const response = await this.ipStackControllerUseCase.execute(id, ip, time);
      return res.json(response);
    } catch (err) {
      return res.status(400).json({ error: err.message || 'Unexpected error' });
    }
  }
}