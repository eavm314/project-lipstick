const { listaProductos } = require("@/data/listaProductos")

export const getProducts = async () => {
    const products = listaProductos;
    return products;
}

export const getProductById = async (id) => {
    const product = listaProductos.filter(p => p.id == id)[0];
    return product;
}