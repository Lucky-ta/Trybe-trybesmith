import connection from './connection';
import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise'
import { Product, AddProduct } from '../types/productTypes';
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

  addProduct = async (product: Product): Promise<AddProduct> => {
    const { name, amount } = product;
    const [result] = await this._connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);', [name, amount],
    );
    const formatedResult = {
      item: {
        id: result.insertId,
        name: name,
        amount: amount,
    },
    };

    return formatedResult;
  }
}

