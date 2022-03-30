import { Router } from "express";
import productsControllers from "../controllers/productsControllers";

const productsRouter = Router();

productsRouter.get('/', productsControllers.findAll);

export default productsRouter;
