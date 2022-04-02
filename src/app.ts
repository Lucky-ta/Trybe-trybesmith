import express, { Express } from 'express';
import ordersRouter from './routes/ordersRouter';
import productsRouter from './routes/productsRouter';
import usersRouter from './routes/usersRouter';

const app: Express = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

export default app;
