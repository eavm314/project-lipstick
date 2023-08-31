"use state"
import React from "react";
import {useState, useEffect} from 'react';
import "../../globals.css"
import '../../tienda/tienda.css'
import './bolsaCompras.css'
import '../../tienda/tienda.css'
import '../../viewItem/resources/paginaIndividual.css'
import { IconContext } from 'react-icons';
import {BsTrash3Fill} from "react-icons/bs";
import Link from "next/link";
import BoxCantidad from "./BoxCantidad";
import { useBolsaComprasContext } from "../../layout";
const em = 16;

const total=0;

export const getTotal = () =>{
    return total
}

const BoxIndividual = (props) =>{
    const {listaBolsaCompras, setListaBolsaCompras} = useBolsaComprasContext()
    const [cantidad, setCantidad] = useState(1);
    const {product, calcTotalProducto, setProducts, cantidadItems, setCantidadItems} = props
    const totalProducto = () =>{
        return product.precio*cantidad
    }
    useEffect(() => {
        calcTotalProducto(product.id, product.precio*cantidad);
      }, [cantidad]);
    const eliminarProducto = () =>{
        const newList = listaBolsaCompras.filter((producto) => producto.id !== product.id);
        setListaBolsaCompras(newList);
        setProducts(newList);
        calcTotalProducto(product.id, 0);
        setCantidadItems(cantidadItems-1);
    }
    return(
        <div className={"box-producto-individual"} style={{paddingRight:"1em"}}>
                <div className="p-4 flex w-3/6 gap-4 flex-wrap flex-row items-center justify-center" style={{backgroundColor:"var(--gris-200)"}}>
                    <div className="imagen-box-producto">
                        <img src={product.imagen} alt="" />
                    </div>
                    <div className="flex flex-col gap-5 w-3/4">
                        <div className={"texto-normal"+"flex flex-wrap"}
                            style={{fontSize:"1em", fontWeight:"var(--weight-medium)"}}>
                            {product.nombreLargo}
                        </div>
                        <div className="texto-tags-producto-tienda" style={{fontSize:"1em"}}>
                            ${product.precio?.toFixed(2)}
                        </div>
                    </div>
                </div>
                <BoxCantidad key={0} cantidad={cantidad} setCantidad={setCantidad}/>
                <div className={"texto-normal"+" font-normal flex"} style={{fontSize:"1.25em", width:"12.5%", justifyContent:"right"}}>${totalProducto().toFixed(2)}</div>
                <IconContext.Provider value={{ className:"icon-bolsa-compras"}}><BsTrash3Fill style={{fontSize:"1.25em"}} onClick={eliminarProducto}/></IconContext.Provider>
                
        </div>
    );

}

export default BoxIndividual;