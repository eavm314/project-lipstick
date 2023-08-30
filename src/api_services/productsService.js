const { listaProductos } = require("@/data/listaProductos")

export const getProducts = async () => {
    const products = listaProductos;
    return products;
}