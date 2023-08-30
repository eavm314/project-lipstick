import { bodoniAPI } from "./axiosAPI";

export const getProducts = async () =>{
    const productos = await bodoniAPI.get('/products');
    return productos.data;
}