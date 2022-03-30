import { Request, Response } from "express";
import productModel from "../models/getProducts";

class ProductsController {
    async findAll(req: Request, res: Response) {
        const products = await productModel.getProducts();
        return res.status(200).json(products);
    }
    // async setProduct(req: Request, res: Response) {
    //     const products = await productModel.setNewProduct();
    //     return res.status(201).json(products);
    // }
};

export default new ProductsController();
