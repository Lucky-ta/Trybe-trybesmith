import connection from './connection';



const getProducts = async () => {
    const [result] = await connection.execute(
        'SELECT * FROM Trybesmith.Products;'
    );

    return result;
};

// const setNewProduct = async (product) => {
//     const [result] = await connection.execute(
//         'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);', [product.name, product.amount],
//     );
// }

export default { getProducts };