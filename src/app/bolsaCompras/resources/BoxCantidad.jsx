import React from "react";
import "../../globals.css"
import '../../tienda/tienda.css'
import './bolsaCompras.css'
import '../../tienda/tienda.css'
import '../../viewItem/resources/paginaIndividual.css'
import { IconContext } from 'react-icons';
import {BsTrash3Fill} from "react-icons/bs";
import {FaPlus, FaMinus} from "react-icons/fa";
import Link from "next/link";
const em = 16;

const BoxCantidad = (props) =>{
    const {productId, cantidad, setCantidadProducto, cantidadView, setCantidadView} = props;
    const aumentar = () =>{
        if(cantidadView<50){
            setCantidadView(cantidadView+1)
            setCantidadProducto(productId,cantidadView+1)
        }
    }
    const disminuir = () =>{
        if(cantidadView>1){
            setCantidadView(cantidadView-1)
            setCantidadProducto(productId,cantidadView-1)
        }
    }
    return(
        <div className={"box-cantidad"}>
                <FaMinus className="icon-bolsa-compras" style={{fontSize:(1.5*em)}} onClick={disminuir}/>
                <div className={"texto-normal"+" font-normal"} style={{fontSize:(1.25*em), lineHeight:(0.5*em), textAlign:"center"}}>{cantidadView}</div>
                <FaPlus className="icon-bolsa-compras" style={{fontSize:(1.5*em)}} onClick={aumentar}/>
        </div>
    );

}

export default BoxCantidad;