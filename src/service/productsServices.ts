import productModel from '../models/getProducts';

const getAll = async () => {
  const result = await productModel.getProducts();
  return result;
};

export default { getAll };