import { Router } from 'express';
import userControllers from '../controllers/usersControllers';
import userMiddlewares from '../middlewares/userMiddlewares';

const usersRouter = Router();

usersRouter.post(
  '/',
  userMiddlewares.validateUsername,
  userMiddlewares.validateClass,
  userMiddlewares.validateLevel,
  userMiddlewares.validatePassword,
  userControllers.setUser,
);

export default usersRouter;