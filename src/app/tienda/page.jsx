"use client"
import React from 'react';
import { useEffect, useState } from "react";
import '../globals.css'
import './tienda.css'
import { BotonProducto } from "./ComponentesTienda";
import { useProductContext } from "./layout";
import { getProducts } from "../services/axiosAPIServices";
// import {getProducts} from "../../api_services/productsService";

// import supabase from '../../utils/SupabaseAPI'


//const em = 16;

const TiendaPage = () => {
  const { selectedCategory } = useProductContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const getProductsTienda = async() =>{
      const products = await getProducts();
      // console.log(products)
      
      setProducts(products.data);
      
      /*const productos = await getProducts();
      setProducts(productos.data)*/
      // console.log("🚀 ~ file: page.jsx:34 ~ getProductsTienda ~ products:", products)
    
    }
    getProductsTienda();
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", alignContent: "center", padding: "4.25em", justifyContent: "center" }}>
      <div className="conjunto-productos">
        {products && products
          .filter((p) => p.categoria === selectedCategory || selectedCategory === "Todos")
          .map((product, index) =>
              <BotonProducto
                key={index}
                id={product.id}
                imagen={product.imagen}
                categoria={product.categoria}
                tags={product.tags}
                nombre={product.nombre}
                nombreLargo={product.nombreLargo}
                precio={product.precio}
                textoBoton={"Añadir"} />
          )}
      </div>
    </div>

  )
}

export default TiendaPage;