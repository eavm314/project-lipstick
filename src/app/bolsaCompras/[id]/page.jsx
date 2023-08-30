"use client"
import React from "react";
import {createContext, useState, useEffect} from 'react';
import "../../globals.css"
import '../../tienda/tienda.css'
import '../resources/bolsaCompras.css'
import '../../tienda/tienda.css'
import '../../viewItem/resources/paginaIndividual.css'
import { IconContext } from 'react-icons';
import {FaXmark} from "react-icons/fa6";
import Link from "next/link";
import BoxIndividual from "../resources/BoxIndividual";
import { listaProductos } from "@/data/listaProductos";
import { listaUsuarios } from "@/data/listaUsuarios";
import { useBolsaComprasContext } from "../../layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const dataPrueba = {
    imagen: "",
    categoria: "",
    nombreLargo: "No tienes nada en tu carrito por el momento, vuelve a la tienda <3",
    precio: 0.00
  }
  
  const em = 16;

  const ProductosCompradosContext = createContext();

    export const useProductosCompradosContext = () => {
        return useContext(ProductContext);
    };
  
  export default function ItemPage({ params }) {

    const {listaBolsaCompras} = useBolsaComprasContext();

    const getUser = (id) =>{
        const data = listaUsuarios.filter((user)=> user.id==id)[0];
        return data
    }
    const getProducts = (idList) => {
      const data = listaProductos.filter((p) => idList.includes(p.id));
      return data; //getProducts(user.productosCarrito)
    }
    const [user, setUser] = useState(getUser(params.id))
    const [products, setProducts] = useState(listaBolsaCompras);
    const [cantidadItems, setCantidadItems] = useState(listaBolsaCompras.length);
    const [totalProducto, setTotalProducto] = useState([]);
    useEffect(() => {
        setTotalProducto(products.map(product => {
            const productIdPrecio = {
                id:product.id,
                precio:product.precio
            }
            return productIdPrecio
        }));
      }, []);
    const calcTotalProducto = (idProduct, newPrecio) => {
        debugger;
        const newProduct ={ id:idProduct, precio:newPrecio}
        const newTotalProducto = totalProducto.map((product) => product.id === idProduct ? newProduct : product)
        setTotalProducto(newTotalProducto)
    }
    return (
      <div style={{ flex: 1, backgroundColor: "var(--sec-b-100)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', padding: "3.5% 20%"}}>
        <div className="flex flex-row w-full"><div className="titulo" style={{fontSize:"2em", width:"95%", paddingBottom:"1.25rem"}}>Tu Bolsa de Compras</div> <Link href={"/tienda"} key={0}><FaXmark/></Link></div>
        <div className="texto-normal" style={{fontSize:"1.25em", width:"100%", paddingBottom:"1.25rem"}}>{cantidadItems} Items</div>
        <div className="horizontal-line"></div>
        <div className={"scroll-parent"+"px-2 flex-nowrap flex-row"}>
        <div className={"scroll-child w-full"}>
        <div className={"scroll-parent"+" px-2 flex-nowrap flex-col"}>
            <div className={"scroll-child flex-col"} style={{height:"31em"}}>
            <div className={"texto-normal"+" font-semibold w-full flex flex-row"} style={{fontSize:"1.25em", paddingBottom:"1.5em", gap:"3.5em"}}>
                <div className="w-3/6">Productos</div>
                <div className="text-right" style={{width:"13.5%"}}>Cantidad</div>
                <div className="text-right" style={{width:"10%"}}>Total</div>
            </div>
            <div className={"gap-5 flex flex-nowrap flex-col w-full"}>
                {products.length===0 ? <div className="texto-normal w-full text-4xl py-36 px-60 text-slate-400 text-center">No tienes nada en tu carrito por el momento, vuelve a la tienda</div>
                
                    : products.map((product, index) => <BoxIndividual product={product} calcTotalProducto={calcTotalProducto} setProducts={setProducts} cantidadItems={cantidadItems} setCantidadItems={setCantidadItems} key={index}/>)
                }
            </div>
            </div>
        </div>
        </div>
        </div>
        <div className="px-8 flex flex-wrap w-full py-4 align-middle">
            <div className="justify-start flex min-w-max max-h-min" style={{width:"50%", paddingBottom:"1.25em"}}>
                <Link href={"/factura"} className="boton-primario" style={{fontSize:"1.25em", pointerEvents: products.length===0  ? 'none' : ''}}>Comprar</Link>
            </div>
            <div className={"justify-end flex gap-44 align-text-bottom w-2/4 min-w-max"}>
                <div className={"texto-normal"} style={{fontSize:"1.75em", fontWeight:"var(--weight-bold)"}}>Total:</div>
                <div className={"texto-normal"} style={{fontSize:"1.5em", fontWeight:"var(--weight-regular)"}}>${totalProducto.reduce((accumulator, product) => {return accumulator+= product.precio},0)}</div>
            </div>
                
        </div>
      </div>
  
    )
  }