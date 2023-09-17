import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const tableProducto = 'producto';
const tableCompra = 'compra';
const tableProductoComprado = 'producto_comprado';

export const createCompra = async (compra, req) => {
    const supabase = createServerComponentClient({ cookies: () => req.cookies });
    const { data: { user } } = await supabase.auth.getUser();
    const total = compra.reduce((accumulator, paquete) => { return accumulator += (paquete.product.precio * paquete.cantidad) }, 0);

    const newCompra = { total_price: total, user_id: user.id };
    const { data } = await supabase.from(tableCompra).insert(newCompra).select().limit(1).single();

    // console.log(data);
    // console.log("error: ", error);

    insertProducts(compra, data.id, req)

}

const insertProducts = async (compra, idCompra, req) => {
    const supabase = createServerComponentClient({ cookies: () => req.cookies })
    const productosEnCompra = compra.map((paquete) => { const newProduct = { producto_id: paquete.product.id, compra_id: idCompra, cantidad: paquete.cantidad }; return newProduct })
    await supabase.from(tableProductoComprado).insert(productosEnCompra)
    // console.log("error prod_comprado: ", error);

}



export const getCompraById = async (idCompra, req) => {
    const supabase = createServerComponentClient({ cookies: () => req.cookies })

    const { data } = await supabase.from(tableCompra).select('*').eq('id', idCompra).limit(1).single();

    return data;
}


export const getCompras = async (req) => {
    const supabase = createServerComponentClient({ cookies: () => req.cookies })
    //const {data: {user}} = await supabase.auth.getUser();
    let { data: compra } = await supabase
        .from(tableCompra)
        .select(`id, user_id, total_price, 
                                        ${tableProductoComprado} (cantidad, producto_id,  
                                        ${tableProducto} (nombreLargo, precio))`);

    // console.log(compra)
    return compra;
}