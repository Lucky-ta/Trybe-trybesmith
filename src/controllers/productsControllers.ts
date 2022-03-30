import { Request, Response } from 'express';
import service from '../service/productsServices';

const findAll = async (req: Request, res: Response) => {
  const products = await service.getAll();
  return res.status(200).json(products);
};

export default { findAll };
