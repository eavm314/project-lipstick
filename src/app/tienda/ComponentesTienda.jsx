import "../globals.css"
import './tienda.css'

import React from 'react';
import PropTypes from 'prop-types';
import {BsBagPlus} from "react-icons/bs";
import Link from "next/link";
import { useBolsaComprasContext } from "../layout";
//const em = 16;

export const BotonProducto = ({ idProd,imagen, categoria, tags, nombre, nombreLargo, precio, textoBoton }) => {

  const {listaBolsaCompras, setListaBolsaCompras} = useBolsaComprasContext()

  const addProduct = () =>{
    const product = {
      id: idProd,
      imagen: imagen,
      nombre: nombre,
      nombreLargo:nombreLargo,
      precio: precio
    }
    if(listaBolsaCompras.filter((producto) => producto.product.id === product.id).length===0){
      const paquete = {
        product: product,
        cantidad: 1
      }
      const newList = [...listaBolsaCompras, paquete]
      setListaBolsaCompras(newList)
    }
  }

  return (
    <div className="boton-producto">
      <Link href={"/viewItem/"+idProd} id="viewItem">
      <div className="imagen-producto-tienda">
        <img 
        className="w-full h-full"
          src={imagen} 
          alt={nombre} />
      </div>
      </Link>

      <p className="texto-normal"
        style={{ fontSize: "1em", width: "9.75em" }}>
        {nombre}
      </p>

      <p className="texto-tags-producto-tienda"
        style={{ fontSize: "0.75em", width: "9.75rem" }}>
        {categoria}: {tags.join(", ")}
      </p>

      <p className="texto-precio-producto-tienda"
        style={{ fontSize: "1.5em", width: "9.75rem" }}>
        ${precio.toFixed(2)}
      </p>

      <button
        style={{ fontSize: "1em" }}
        className="boton-primario" onClick={addProduct} id="add"
      >
        {textoBoton}
            <BsBagPlus/>
      </button>
    </div>
  )
}

export const BotonProductoSinContext = ({ id,imagen, categoria, tags, nombre, nombreLargo, precio, textoBoton }) => {

  return (
    <div className="boton-producto">
      <Link href={"/viewItem/"+id} id="viewItem">
      <div className="imagen-producto-tienda">
        <img 
        className="w-full h-full"
          src={imagen} 
          alt={nombre} />
      </div>
      </Link>

      <p className="texto-normal"
        style={{ fontSize: "1em", width: "9.75em" }}>
        {nombre}
      </p>

      <p className="texto-tags-producto-tienda"
        style={{ fontSize: "0.75em", width: "9.75rem" }}>
        {categoria}: {tags.join(", ")}
      </p>

      <p className="texto-precio-producto-tienda"
        style={{ fontSize: "1.5em", width: "9.75rem" }}>
        ${precio.toFixed(2)}
      </p>

      <button
        style={{ fontSize: "1em" }}
        className="boton-primario" id="add"
      >
        {textoBoton}
            <BsBagPlus/>
      </button>
    </div>
  )
}

// Define las PropTypes para el componente
BotonProducto.propTypes = {
  idProd: PropTypes.number,
  imagen: PropTypes.string,
  categoria: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  nombre: PropTypes.string,
  nombreLargo: PropTypes.string,
  precio: PropTypes.number,
  textoBoton: PropTypes.string,
};