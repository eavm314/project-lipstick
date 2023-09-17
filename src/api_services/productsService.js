import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
// import { cookies } from "next/headers.js";

const tableName = 'producto';

export const getProducts = async (req) => {
    const supabase = createServerComponentClient({cookies: () => req.cookies})

    const {data}  = await supabase.from(tableName).select('*');
    // console.log("🚀 ~ file: productsService.js:9 ~ getProducts ~ data:", data)
    return data;
}

export const getProductById = async (id, req) => {
    const supabase = createServerComponentClient({cookies: () => req.cookies})

    const {data}  = await supabase.from(tableName).select('*').eq('id',id).limit(1).single();
    
    return data;
}






