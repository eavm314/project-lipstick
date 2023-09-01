import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const getProducts = async () => {
    const supabase = createServerActionClient({cookies});
    const {data}  = await supabase.from("productos").select('*');
    console.log("🚀 ~ file: productsService.js:9 ~ getProducts ~ data:", data)
    return data;
} 

export const getProductById = async (id) => {
    const product = listaProductos.filter(p => p.id == id)[0];
    return product;
}