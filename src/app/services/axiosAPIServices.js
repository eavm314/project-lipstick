import { bodoniAPI } from "./axiosAPI";

export const getProducts = async () =>{
    const productos = await bodoniAPI.get('/products');
    return productos.data;
}

export const getProductById = async (id) =>{
    const producto = await bodoniAPI.get(`/products/${id}`);
    return producto.data;
}

export const getUser = async () => {
    const user = await bodoniAPI.get('/user');
    return user.data;
}

export const createCompra = async (compra) =>{
    await bodoniAPI.post(`/compra`,compra);
}