import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const tableProducto = 'producto_comprado';
const tableCompra = 'compra';

export const createCompra = async (compra) => {
    const supabase = createServerComponentClient({cookies})
    const {data: {user}} = await supabase.auth.getUser();
    const total = compra.reduce((accumulator, product) => {return accumulator+= product.precio},0)
    const {data, error } = await supabase.from(tableCompra).insert({total_price: total, user_id: user.id}).select()

    insertProducts(compra, data.id)
}

const insertProducts = async (productos, idCompra) => {
    const supabase = createServerComponentClient({cookies})
    const productosEnCompra = productos.map((product) => {const newProduct = {producto_id: product.id, compra_id: idCompra, cantidad: product.cantidad}; return newProduct})
    const { error } = await supabase.from(tableProducto).insert(productosEnCompra)
}

export const getCompras = async () =>{
    const supabase = createServerComponentClient({cookies})
    const {data: {user}} = await supabase.auth.getUser();
    const {data, error} = await supabase.from(tableCompra).select(`compra_id, ${tableProducto} (producto_id, cantidad, producto (nombreLargo, precio))`).eq('user_id', user.id);
}

