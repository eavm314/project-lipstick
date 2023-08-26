"use state"
import React from "react";
import {useState} from 'react';
import "../../globals.css"
import '../../tienda/tienda.css'
import './bolsaCompras.css'
import '../../tienda/tienda.css'
import '../../viewItem/resources/paginaIndividual.css'
import { IconContext } from 'react-icons';
import {BsTrash3Fill} from "react-icons/bs";
import Link from "next/link";
import BoxCantidad from "./BoxCantidad";
const em = 16;

const BoxIndividual = (props) =>{
    const [cantidad, setCantidad] = useState(1);
    const {product} = props
    const totalProducto = () =>{
        return product.precio*cantidad;
    }
    return(
        <div className={"box-producto-individual"}>
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
                <BsTrash3Fill className="icon-bolsa-compras" style={{fontSize:"1.25em"}}/>
        </div>
    );

}

export default BoxIndividual;