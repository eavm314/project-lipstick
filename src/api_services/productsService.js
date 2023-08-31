//const { listaProductos } = require("@/data/listaProductos")
//import { listaProductos } from "./SupabaseAPI";
import supabase from "@/utils/SupabaseAPI";
const tableName = 'productos';

export const getProducts = async () => {
    const productos  = await supabase.from(tableName).select('*');
    console.log("🚀 ~ file: productsService.js:9 ~ getProducts ~ productos:", productos)
    return productos;
}

/*export const getProducts = async () => {
    const products = listaProductos;
    return products;
}   

export const getProductById = async (id) => {
    const product = listaProductos.filter(p => p.id == id)[0];
    return product;
}*/