import { Router } from 'express';
import { createProductController } from './UseCases/CreateProduct';
import { deleteProductController } from './UseCases/DeleteProduct';

const routes = Router();

routes.post('/product', (req, res) => {
    return createProductController.handle(req, res);
});
routes.get('/output', (req, res) => {
    return deleteProductController.handle(req, res);
})
export { routes };