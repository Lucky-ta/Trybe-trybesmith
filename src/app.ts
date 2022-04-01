import express, { Express } from 'express';
import productsRouter from './routes/productsRouter';

const app: Express = express();

app.use(express.json());

app.use('/products', productsRouter);

export default app;
