import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import Stars from "./stars";
import "../../globals.css"
import "../resources/paginaIndividual.css"
import Link from "next/link";

const em = 16;

export const ViewItem = ({product}) => {
  return (

    <div className="relative box-con-equis">

      <Link
        href={"/tienda"}
        className="absolute w-6 h-6 top-4 end-5"
      >
        <FontAwesomeIcon icon={faXmark} color="var(--transicion-100)" size="2xl" />
      </Link>
      {/* <FontAwesomeIcon icon={faAngleLeft} color="#000000" size="3x" style={{ padding: 10 }} /> */}
      <div className="box-datos-imagen mt-8">
        <div className="imagen-producto-individual">
          <img src={product.imagen} alt="" />
        </div>
        <div className="box-datos">
          <p className="tituloItemIndividual" style={{ fontSize: 2 * em }}>{product.nombre}</p>
          <div style={{ display: "flex", gap: (0.75 * em) }}>
            {product.tags.map((tag, index) => <view className="box-tags">
              <p className="texto-tags-pagina-individual" style={{ fontSize: 1 * em }}>{tag}</p>
            </view>)}
          </div>
          <p className="texto-precio-producto-pagina-individual" style={{ fontSize: 1.5 * em }}>$ {product.precio}</p>
          <p className="texto-cuerpo-pagina-individual" style={{ fontSize: em, maxWidth: (26.5 * em) }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Stars numStar={Math.floor(Math.random() * 5) + 1} />
          <div className="flex flex-col w-1/2 content-center mx-auto">
            
            <Link
              href={"/createAccount"}
              className="boton-primario w-40 my-5 mx-auto"
            //TODO: llevar a producto individual
            >
              Comprar
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}