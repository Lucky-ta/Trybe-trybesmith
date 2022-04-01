import { Request, Response } from 'express';
import connection from '../models/connection';
import { ProductsModels } from '../models/productModel';

const findAll = async (req: Request, res: Response) => {
  const products = new ProductsModels(connection);
  const result = await products.getAll();
  return res.status(200).json(result);
};

export default { findAll };
