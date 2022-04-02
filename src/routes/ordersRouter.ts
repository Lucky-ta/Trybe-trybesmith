import { Router } from 'express';
import ordersControllers from '../controllers/ordersControllers';

const ordersRouter = Router();

ordersRouter.get('/', ordersControllers.getAll);

export default ordersRouter;
