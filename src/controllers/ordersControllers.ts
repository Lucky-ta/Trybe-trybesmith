import { Request, Response } from 'express';
import connection from '../models/connection';
import OrdersModel from '../models/ordersModels';

const getAll = async (req: Request, res: Response) => {
  const result = new OrdersModel(connection);
  const orders = await result.listAll();
  return res.status(200).json(orders);
};

export default { getAll };