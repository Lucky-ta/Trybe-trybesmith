import { Pool } from 'mysql2/promise'
import { Product } from '../types/productTypes';

export interface IProductsModel {
    _connection: Pool;
    getAll: () => Promise<Product[]>;
}