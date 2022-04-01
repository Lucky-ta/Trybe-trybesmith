export type Product = {
    name: string,
    amount: string,
}

export type AddProduct = {
    item: {
        id: number,
        name: string,
        amount: string,
    },
}