import { Request, Response } from 'express';
import connection from '../models/connection';
import UsersModels from '../models/userModel';

const setUser = async (req: Request, res: Response) => {
  const user = req.body;
  const userModel = new UsersModels(connection);
  const result = await userModel.setUser(user);
  return res.status(201).json({ token: result });
};

export default { setUser };