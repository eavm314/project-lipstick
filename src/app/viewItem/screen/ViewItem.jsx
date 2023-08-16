import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import Stars from "../resources/stars";
import "../../globals.css"
import "../resources/paginaIndividual.css"

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
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: (2*em), background:'var(--gris-400)', padding:(1.25*em)}}>
      {/* <FontAwesomeIcon icon={faAngleLeft} color="#000000" size="3x" style={{ padding: 10 }} /> */}
      <div style={{ paddingTop: 0.75*em }}>
        

        <view style={{ display: "flex" }}>
          <div className="imagen-producto-individual">
            <img src={"/lipstickPrueba.jpg"} alt="" />
          </div>
          <div className="box-datos">
            <p className="tituloItemIndividual" style={{ fontSize: 2*em}}>{dataPrueba.nombre}</p>
            <div style={{ display: "flex", gap: (0.75*em)}}>
              {dataPrueba.tags.map((tag, index) => <view style={{ display: "flex", borderColor: "#000", borderWidth: 0.5, alignItems: "center", justifyContent: "center", maxHeight: (1.75*em), padding: (0.25*em)}}>
                <p className="texto-tags-pagina-individual" style={{ fontSize: 1*em}}>{tag}</p>
              </view>)}
            </div>
            <p className="texto-precio-producto-pagina-individual" style={{ fontSize: 24, marginTop: 5 }}>$ {dataPrueba.precio}</p>
            <p className="texto-cuerpo-pagina-individual" style={{ fontSize: 16, marginTop: 5, width: 424, height: 115, lineHeight: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Stars numStar={dataPrueba.rating}></Stars>
            <view style={{ alignItems: 'center', justifyContent: 'center' }}>
              <button
                style={{ fontSize: 16, marginLeft: 168, marginTop: 10 }}
                className="boton-primario"
              //TODO: llevar a producto individual
              >
                Comprar
              </button>
            </view>
          </div>

        </view>

      </div>

      {/* <FontAwesomeIcon icon={faAngleRight} color="#000000" siscze="3x" style={{ padding: 10 }} /> */}
    </div>
  )
}