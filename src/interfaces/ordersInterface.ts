import { Pool } from 'mysql2/promise';
import { OrderType } from '../types/ordersTypes';

export interface IOrderModel {
  connection: Pool;
  listAll: () => Promise<OrderType[]>
}