import { Pool } from 'mysql2/promise';
import { Product, AddProduct } from '../types/productTypes';
import { UserType } from '../types/usersTypes';

export interface IProductsModel {
  connection: Pool;
  getAll: () => Promise<Product[]>;
  addProduct: (product: Product) => Promise<AddProduct>;
}

export interface IUserModel {
  connection: Pool;
  setUser: (user: UserType) => Promise<string>;
}