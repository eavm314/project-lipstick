import { bodoniAPI } from "./axiosAPI";

export const getProducts = async () =>{
    const productos = await bodoniAPI.get('/products');
    return productos.data;
}

export const getUser = async () => {
    const user = await bodoniAPI.get('/user');
    return user.data;
}