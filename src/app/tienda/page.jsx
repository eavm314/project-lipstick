"use client"
import { useEffect, useState } from "react";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";
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
  textoBoton: "Comprar"
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
    <div style={{ display: "flex", alignItems: "center", alignContent: "center", padding: (4.25 * em), justifyContent: "center" }}>
      <div className="conjunto-productos">
        {products
          .filter((p) => p.categoria === selectedCategory || selectedCategory === "Todos")
          .map((product, index) =>
            <Link href={"/viewItem"} key={index}>
              <BotonProducto
                imagen={product.imagen}
                categoria={product.categoria}
                tags={product.tags}
                nombre={product.nombre}
                precio={product.precio}
                textoBoton={"Comprar"} />
            </Link>
          )}
      </div>
    </div>

  )
}

export default TiendaPage;