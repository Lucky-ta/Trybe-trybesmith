import { Router } from 'express';
import controllers from '../controllers/productsControllers'
import productsMiddlewares from '../middlewares/productsMiddlewares';

const productsRouter = Router();

productsRouter.get('/', controllers.findAll);

export default productsRouter;
