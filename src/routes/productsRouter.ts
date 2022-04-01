import { Router } from 'express';
import controllers from '../controllers/productsControllers';
import productsMiddlewares from '../middlewares/productsMiddlewares';

const productsRouter = Router();

productsRouter.get('/', controllers.findAll);
productsRouter.post(
  '/',
  productsMiddlewares.validateAmount,
  productsMiddlewares.validateName,
  controllers.setNewProduct,
);

export default productsRouter;
