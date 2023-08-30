"use client"
import { useEffect, useState } from "react";

import '../globals.css'
import './tienda.css'
import { BotonProducto } from "./ComponentesTienda";
import Link from "next/link";
import { listaProductos } from "@/data/listaProductos";
import { useProductContext } from "./layout";

const dataPrueba = {
  imagen: "lipstickPrueba",
  categoria: "Labios",
  tags: ["lipstick", "especial"],
  nombre: "Ruby Lips",
  precio: "70.00",
  textoBoton: "Añadir"
}
const em = 16;

const TiendaPage = () => {
  const { selectedCategory } = useProductContext();

  const [products, setProducts] = useState([]);
  const getProducts = () => {
    const data = listaProductos;
    setProducts(data)
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", alignContent: "center", padding: "4.25em", justifyContent: "center" }}>
      <div className="conjunto-productos">
        {products
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