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
import BoxProducto from "./BoxProducto";
import BoxCantidad from "./BoxCantidad";
const em = 16;

const dataPrueba = {
    imagen: "lipstickPrueba.jpg",
    categoria: "Labios",
    tags: ["lipstick", "especial"],
    nombre: "Ruby Lips",
    nombreLargo: "Labial Sabor  Chocolate Humectante Antigrasa Esika Premium",
    precio: 70.00,
    textoBoton: "Añadir"
  }

const BoxIndividual = (product) =>{
    const [cantidad, setCantidad] = useState(1);
    const totalProducto = () =>{
        return dataPrueba.precio*cantidad
    }
    return(
        <div className={"box-producto-individual"}>
                <BoxProducto key={0} product={product}/>
                <BoxCantidad key={0} cantidad={cantidad} setCantidad={setCantidad}/>
                <div className={"texto-normal"+" font-normal flex"} style={{fontSize:(1.25*em), width:"12.5%", justifyContent:"right"}}>${totalProducto().toFixed(2)}</div>
                <BsTrash3Fill className="icon-bolsa-compras" style={{fontSize:(1.25*em)}}/>
        </div>
    );

}

export default BoxIndividual;