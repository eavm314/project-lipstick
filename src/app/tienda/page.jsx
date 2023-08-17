"use client"
import { useState } from "react";
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

const dataPrueba = {
  imagen: "lipstickPrueba",
  categoria: "Labios",
  tags: ["lipstick", "especial"],
  nombre: "Ruby Lips",
  precio: "70.00",
  textoBoton: "Comprar"
}

const TiendaPage = () => {
  const [cont, setCont] = useState(2);
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  const em = 16;
  return (
    <div style={{ display: "flex", alignItems: "center", alignContent: "center", padding: (4.25 * em), justifyContent: "center" }}>
      <div className="conjunto-productos">
        {nums.map((num, index) =>
          <Link href={"/viewItem"}>
            <BotonProducto
              key={index}
              imagen={dataPrueba.imagen}
              categoria={dataPrueba.categoria}
              tags={dataPrueba.tags}
              nombre={dataPrueba.nombre}
              precio={dataPrueba.precio}
              textoBoton={dataPrueba.textoBoton} />
          </Link>
        )}
      </div>
    </div>

  )
}

export default TiendaPage;