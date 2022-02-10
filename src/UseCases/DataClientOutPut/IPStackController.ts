import { Request, Response } from 'express';
import { IDataUserDTO } from './IDataUserDTO';
import { IPStackUseCase } from './IPStackUseCase';

export class IPStackController {
  constructor(private ipStackControllerUseCase: IPStackUseCase) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id, ip, time } = req.body;
    try {
      const dataUser: IDataUserDTO = {
        id: id,
        ip: ip,
        time: time
      }
      const response = await this.ipStackControllerUseCase.execute(dataUser);

      return res.json({ response });
    } catch (err) {
      return res.status(400).json({ error: err.message || 'Unexpected error' });
    }
  }
}