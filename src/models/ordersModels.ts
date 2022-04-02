import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrderModel } from '../interfaces/ordersInterface';
import { OrderType } from '../types/ordersTypes';

export default class OrdersModel implements IOrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  listAll = async (): Promise<OrderType[]> => {
    const [orders] = await this.connection.execute<RowDataPacket[]>(
      `SELECT trybeO.id, trybeO.userId, trybeP.id as product
        FROM  Trybesmith.Orders as trybeO
        INNER JOIN  Trybesmith.Products as trybeP
        ON  trybeP.orderId = trybeO.id;`,
    );
    const formatedResult: OrderType[] = orders.map(({ id, userId, product }) => {
      const obj = {
        id,
        userId,
        products: [product],
      };
      return obj;
    });

    return formatedResult as OrderType[];
  };
}