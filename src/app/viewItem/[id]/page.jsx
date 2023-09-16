"use client"
import React from 'react';
import { useEffect, useState } from "react";
import { ViewItem } from "../resources/ViewItem";
import { BotonProducto } from "../../tienda/ComponentesTienda";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import {BsBag} from "react-icons/bs";
import { IconContext } from 'react-icons';
import { getProductById, getProducts } from "@/app/services/axiosAPIServices";
import PropTypes from 'prop-types';

config.autoAddCss = false;



//const em = 16;

export default function ItemPage({ params }) {

  const [product, setProduct] = useState([]);
  const [recomendados, setRecomendados] = useState([]);
  const [ setProducts] = useState([]);

  useEffect(() => {
    const getProductsTienda = async(id) =>{
      const products = await getProducts();
      const product = await getProductById(id);
      const recomendados = products.data.filter((p) => p.categoria === product.data.categoria && p.id !== product.data.id).slice(0, 5);
      setProducts(products.data);
      setProduct(product.data);
      setRecomendados(recomendados);
    }

    getProductsTienda(params.id);
  }, []);

  return (
    <>
    <div className="flex flex-initial flex-nowrap w-full h-max py-3.5 px-9" style={{backgroundColor:"var(--transicion-700)"}}>
        <div className="filter-bar">
        </div>
        <div style={{width:"16.67%", display:"flex"}}>
          <IconContext.Provider value={{ className: 'icons-filter-bar' }}>
          <Link href={"/bolsaCompras/1"} key={0}><BsBag/></Link>
          </IconContext.Provider>
        </div>
      </div>
    <div style={{ flex: 1, backgroundColor: "var(--primary-100)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', padding: "4em", gap: "2.5em" }}>
      <ViewItem product={product} id="viewItem"/>
      <div>
        <div className="conjunto-productos">
          {recomendados?.map((producto, index) =>

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

ItemPage.propTypes = {
  params: PropTypes.object.isRequired, // Asegúrate de ajustar el tipo de datos según tus necesidades
};