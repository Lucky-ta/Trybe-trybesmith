import connection from './connection';

const getProducts = async () => {
    const [result] = await connection.execute(
        'SELECT * FROM Trybesmith.Products;'
    );

    return result;
};

export default { getProducts };