import dotenv from 'dotenv';
import { Pool, ResultSetHeader } from 'mysql2/promise';
import jwt from 'jsonwebtoken';
import { UserType } from '../types/usersTypes';
import { IUserModel } from '../interfaces/productInterfaces';

dotenv.config();
const SECRET = process.env.JWT_SECRET;

export default class UsersModels implements IUserModel {
  connection: Pool;

  constructor(conection: Pool) {
    this.connection = conection;
  }

  setUser = async (user: UserType): Promise<string> => {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?);',
      [username, classe, level, password],
    );
        
    const token = jwt.sign(user, JSON.stringify(SECRET), {
      expiresIn: '15m',
      algorithm: 'HS256',
    });
    return token;
  };
}