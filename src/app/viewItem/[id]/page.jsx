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
    <div style={{ flex: 1, backgroundColor: "var(--primary-100)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', padding: 4 * em, gap: 2.5 * em }}>
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

  )
}