import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const tableName = 'producto';

export const getProducts = async () => {
    const supabase = createServerComponentClient({cookies})

    const {data}  = await supabase.from(tableName).select('*');
    // console.log("🚀 ~ file: productsService.js:9 ~ getProducts ~ data:", data)
    return data;
}
/*
export const getProductById = async (id) => {
    const product = listaProductos.filter(p => p.id == id)[0];
    return product;
}*/