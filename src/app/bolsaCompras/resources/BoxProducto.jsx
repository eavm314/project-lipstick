import React from "react";
import "../../globals.css"
import '../../tienda/tienda.css'
import './bolsaCompras.css'
import '../../tienda/tienda.css'
import { IconContext } from 'react-icons';
import {BsTrash3Fill} from "react-icons/bs";
import Link from "next/link";
const em = 16;

const BoxProducto = (product) => {
    return(
        <div className="p-4 flex w-3/6 gap-4" style={{backgroundColor:"var(--gris-200)"}}>
            <div className="imagen-box-producto">
                <img src={product.imagen} alt="" />
            </div>
            <div className="flex flex-col w-full gap-5">
                <div className={"texto-normal"+"flex flex-wrap"}
                    style={{fontSize:(1*em), fontWeight:"var(--weight-medium)"}}>
                        {product.nombreLargo}
                </div>
                <div className="texto-tags-producto-tienda" style={{fontSize:(1*em)}}>
                        ${product.precio?.toFixed(2)}
                </div>
            </div>
        </div>
    )
}

export default BoxProducto;