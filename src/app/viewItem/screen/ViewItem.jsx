import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import Stars from "../resources/stars";
import "../../globals.css"
import "../resources/paginaIndividual.css"
import Link from "next/link";

const dataPrueba = {
  imagen: "lipstickPrueba",
  categoria: "Labios",
  tags: ["lipstick", "especial"],
  nombre: "Ruby Lips Lipstick Sabor Chocolate Humectante Antigrasa Premium",
  precio: "70.00",
  rating: 3,
  textoBoton: "Comprar"
}

const em = 16;

export default function ViewItem() {
  return (
      
    <div className="box-con-equis">
      <Link href={"/tienda"}
        style={{alignContent:'flex-end', alignItems: 'right', justifyContent: 'right', width: '100%', display: 'flex'}}>
          <FontAwesomeIcon icon={faXmark} color="var(--transicion-100)" size="2xl" />
      </Link>
      {/* <FontAwesomeIcon icon={faAngleLeft} color="#000000" size="3x" style={{ padding: 10 }} /> */}
      <div className="box-datos-imagen">
          <div className="imagen-producto-individual">
            <img src={"/lipstickPrueba.jpg"} alt="" />
          </div>
          <div className="box-datos">
            <p className="tituloItemIndividual" style={{ fontSize: 2*em}}>{dataPrueba.nombre}</p>
            <div style={{ display: "flex", gap: (0.75*em)}}>
              {dataPrueba.tags.map((tag, index) => <view className="box-tags">
                <p className="texto-tags-pagina-individual" style={{ fontSize: 1*em}}>{tag}</p>
              </view>)}
            </div>
            <p className="texto-precio-producto-pagina-individual" style={{ fontSize: 1.5*em}}>$ {dataPrueba.precio}</p>
            <p className="texto-cuerpo-pagina-individual" style={{ fontSize: em, maxWidth: (26.5*em)}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Stars numStar={dataPrueba.rating}></Stars>
            <div style={{ display:"flex", alignItems: 'center', justifyContent: 'center', width: '100%'}}>
              <Link
                href={"/createAccount"}
                className="boton-primario"
              //TODO: llevar a producto individual
              >
                Comprar
              </Link>
            </div>
          </div>

      </div>

      {/* <FontAwesomeIcon icon={faAngleRight} color="#000000" siscze="3x" style={{ padding: 10 }} /> */}
    </div>
  )
}