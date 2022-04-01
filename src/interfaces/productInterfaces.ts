import { Pool } from 'mysql2/promise';
import { Product, AddProduct } from '../types/productTypes';

export interface IProductsModel {
  connection: Pool;
  getAll: () => Promise<Product[]>;
  addProduct: (product: Product) => Promise<AddProduct>;
}