import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import Stars from "../resources/stars";
import "../../globals.css"

const dataPrueba = {
    imagen: "lipstickPrueba",
    categoria: "Labios",
    tags: ["lipstick", "especial"],
    nombre: "Ruby Lips Lipstick Sabor Chocolate Humectante Antigrasa Premium",
    precio: "70.00",
    rating: 3,
    textoBoton: "Comprar"
}

export default function ViewItem() {
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f7f8f9" }}>
            <FontAwesomeIcon icon={faAngleLeft} color="#000000" size="3x" style={{ padding: 10 }} />
            <div style={{ paddingTop: 13 }}>
                <div style={{ flexDirection: 'row-reverse' }}>
                    <FontAwesomeIcon icon={faXmark} color="#D0d0d0" size="2xl" style={{ padding: 10, paddingLeft: 1000 }} />
                </div>

                <view style={{ display: "flex" }}>
                    <img src="/lipstickPrueba.jpg" height="402" width="402" />
                    <div style={{ width: 581, height: 402, paddingLeft: 32 }}>
                        <p className="tituloItemIndividual" style={{ fontSize: 32, width: 554, height: 68 }}>{dataPrueba.nombre}</p>
                        <div style={{ display: "flex", paddingTop: 30 }}>
                            <view style={{ borderColor: "#000", borderWidth: 1, alignItems: "center", justifyContent: "center", padding: 4, margin: 5 }}>
                                <p className="texto-tags-pagina-individual">Lipstick</p>
                            </view>
                            <view style={{ borderColor: "#000", borderWidth: 1, alignItems: "center", justifyContent: "center", padding: 4, margin: 5 }}>
                                <p className="texto-tags-pagina-individual">Hidratacion</p>
                            </view>
                        </div>
                        <p className="texto-precio-producto-pagina-individual" style={{ fontSize: 24, marginTop: 5 }}>$ {dataPrueba.precio}</p>
                        <p className="texto-cuerpo-pagina-individual" style={{ fontSize: 16, marginTop: 5, width: 424, height: 115, lineHeight: 2 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Stars numStar={dataPrueba.rating}></Stars>
                        <view style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <button
                                style={{ fontSize: 16,marginLeft:168,marginTop:10 }}
                                className="boton-primario"
                            //TODO: llevar a producto individual
                            >
                                Añadir al Carrito
                            </button>
                        </view>
                    </div>

                </view>

            </div>

            <FontAwesomeIcon icon={faAngleRight} color="#000000" size="3x" style={{ padding: 10 }} />
        </div>
    )
}