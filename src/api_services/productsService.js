//const { listaProductos } = require("@/data/listaProductos")
//import { listaProductos } from "./SupabaseAPI";
import supabase from "@/utils/SupabaseAPI";
const tableName = 'producto';

export const getProducts = async () => {
    const {data}  = await supabase.from(tableName).select('*');
    console.log("🚀 ~ file: productsService.js:9 ~ getProducts ~ data:", data)
    return data;
}
/*
export const getProductById = async (id) => {
    const product = listaProductos.filter(p => p.id == id)[0];
    return product;
}*/