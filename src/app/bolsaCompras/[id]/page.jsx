"use client"
import React from "react";
import {useState} from 'react';
import "../../globals.css"
import '../../tienda/tienda.css'
import '../resources/bolsaCompras.css'
import '../../tienda/tienda.css'
import '../../viewItem/resources/paginaIndividual.css'
import { IconContext } from 'react-icons';
import {BsTrash3Fill} from "react-icons/bs";
import Link from "next/link";
import BoxIndividual from "../resources/BoxIndividual";
import { listaProductos } from "@/data/listaProductos";

const dataPrueba = {
    imagen: "lipstickPrueba",
    categoria: "Labios",
    tags: ["lipstick", "especial"],
    nombre: "Ruby Lips",
    precio: 70.00,
    textoBoton: "Comprar"
  }
  
  const em = 16;
  
  export default function ItemPage({ params }) {
    const getProduct = (id) => {
      const data = listaProductos.filter((p) => p.id == id)[0];
      return data;
    }
    const [product, setProduct] = useState(getProduct(params.id));
    const [cantidadItems, setCantidadItems] = useState(1);
    return (
      <div style={{ flex: 1, backgroundColor: "var(--sec-b-100)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', padding: "5% 20%"}}>
        <div className="titulo" style={{fontSize:"2em", width:"100%", paddingBottom:"1.25rem"}}>Tu Bolsa de Compras</div>
        <div className="texto-normal" style={{fontSize:"1.25em", width:"100%", paddingBottom:"1.25rem"}}>{cantidadItems} Items</div>
        <div className="horizontal-line"></div>
        <div className={"scroll-parent"+"px-3 flex-nowrap flex-row"}>
        <div className={"scroll-child"}>
        <div className={"scroll-parent"+" px-3 flex-nowrap flex-col"}>
            <div className={"scroll-child"} style={{height:"31em"}}>
            <div className={"texto-normal"+" font-semibold w-full flex flex-row"} style={{fontSize:"1.25em", paddingBottom:"1.5em", gap:"3.5em"}}>
                <div className="w-3/6">Productos</div>
                <div className="text-right" style={{width:"13.5%"}}>Cantidad</div>
                <div className="text-right" style={{width:"10%"}}>Total</div>
            </div>
            <div className={"gap-5 flex flex-nowrap flex-col"}>
                <BoxIndividual product={product} />
                <BoxIndividual product={product} />
                <BoxIndividual product={product} />
                <BoxIndividual product={product} />
            </div>
            </div>
        </div>
        </div>
        </div>
      </div>
  
    )
  }