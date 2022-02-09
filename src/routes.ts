import { Router } from 'express';
import { ipStackController } from './UseCases/DataClientOutPut';

const routes = Router();

routes.post('/output', (req, res) => {
  return ipStackController.handle(req, res);
})

export { routes };