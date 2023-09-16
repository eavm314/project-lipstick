import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const tableProducto = 'producto';
const tableCompra = 'compra';
const tableProductoComprado = 'producto_comprado';

export const createCompra = async (compra) => {
    const supabase = createServerComponentClient({ cookies });
    const { data: { user } } = await supabase.auth.getUser();
    const total = compra.reduce((accumulator, paquete) => { return accumulator += (paquete.product.precio * paquete.cantidad) }, 0);

    const newCompra = { total_price: total, user_id: user.id };
    const { data, error } = await supabase.from(tableCompra).insert(newCompra).select().limit(1).single();

    console.log(data);
    console.log("error: ", error);

    insertProducts(compra, data.id)

}

const insertProducts = async (compra, idCompra) => {
    const supabase = createServerComponentClient({ cookies })
    const productosEnCompra = compra.map((paquete) => { const newProduct = { producto_id: paquete.product.id, compra_id: idCompra, cantidad: paquete.cantidad }; return newProduct })
    const { error } = await supabase.from(tableProductoComprado).insert(productosEnCompra)
    console.log("error prod_comprado: ", error);

}



export const getCompraById = async (idCompra) => {
    const supabase = createServerComponentClient({ cookies })

    const { data } = await supabase.from(tableCompra).select('*').eq('id', idCompra);

    return data[0];
}


export const getCompras = async () => {
    const supabase = createServerComponentClient({ cookies })
    //const {data: {user}} = await supabase.auth.getUser();
    let { data: compra } = await supabase
        .from(tableCompra)
        .select(`id, user_id, total_price, 
                                        ${tableProductoComprado} (cantidad, producto_id,  
                                        ${tableProducto} (nombreLargo, precio))`);

    console.log(compra)
    return compra;
    // const productos = compra.map(async (compra) => {
    //     const productos = await getProductoCompradoById(compra.id);
    //     const paquete = {
    //         compras: compra,
    //         productos: productos,
    //         compraId:compra.id,
    //         total:compra.total_price
    //         }
    //     return paquete
    // })
    // return productos;

}