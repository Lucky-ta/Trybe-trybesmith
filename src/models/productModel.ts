import connection from './connection';
import { Pool, RowDataPacket } from 'mysql2/promise'
import { Product } from '../types/productTypes';
import { IProductsModel } from '../interfaces/productInterfaces';

export class ProductsModels implements IProductsModel{
  _connection: Pool;
  constructor(connection: Pool) {
    this._connection = connection;
  }

  getAll = async (): Promise<Product[]> => {
    const [result] = await this._connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products;');
    return result as Product[];
  };
}

