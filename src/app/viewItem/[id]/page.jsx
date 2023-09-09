"use client"
import { useEffect, useState } from "react";
import { ViewItem } from "../resources/ViewItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BotonProducto } from "../../tienda/ComponentesTienda";
import { faAngleLeft, faAngleRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { listaProductos } from "@/data/listaProductos";
import Link from "next/link";
import {BsBag} from "react-icons/bs";
import {FaRegHeart} from "react-icons/fa";
import { IconContext } from 'react-icons';

config.autoAddCss = false;

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

  const getRecomendados = () => {
    const data = listaProductos.filter((p) => p.categoria == product.categoria).slice(0, 5);
    return data
  }

  const [product, setProduct] = useState(getProduct(params.id));
  const [recomendados, setRecomendados] = useState(getRecomendados());

  return (
    <>
    <div className="flex flex-initial flex-nowrap w-full h-max py-3.5 px-9" style={{backgroundColor:"var(--transicion-700)"}}>
        <div className="filter-bar">
        </div>
        <div style={{width:"16.67%", display:"flex"}}>
          <IconContext.Provider value={{ className: 'icons-filter-bar' }}>
          <Link href={"/bolsaCompras/1"} key={0}><BsBag/></Link>
           <FaRegHeart/>
          </IconContext.Provider>
        </div>
      </div>
    <div style={{ flex: 1, backgroundColor: "var(--primary-100)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', padding: "4em", gap: "2.5em" }}>
      <ViewItem product={product} />
      <div>
        <div className="conjunto-productos">
          {recomendados.map((producto, index) =>

              <BotonProducto key={index}
              id={producto.id} imagen={producto.imagen} categoria={producto.categoria}
                tags={producto.tags} nombre={producto.nombre} precio={producto.precio} textoBoton={"Añadir"} />
          )}
        </div>
      </div>
    </div>
    </>
  )
}