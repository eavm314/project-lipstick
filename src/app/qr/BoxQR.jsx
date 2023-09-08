"use client"
import { useEffect, useState } from "react";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";
import '../globals.css'
import './qr.css'
import Link from "next/link";

const BoxQR = (props) =>{
   const {showModal} = props
    const instrucciones = ["Ingrese a la aplicación de su Banco desde su dispositivo móvil.",
  "Ingrese a la opción de Pago QR en su aplicación.",
  "Capture el Código QR que aparece en Pantalla con la cámara de su Celular.",
  "Una vez realizado el pago, espere unos segundos hasta que reciba una confirmación de pago."];

  const [qr, setQR] = useState("/qr1.png")
  const [clicked, setClicked] = useState(false)
  const changeQR = () =>{
    if (clicked){
        setQR("/qr2.png");
    } else{
        setQR("/qr1.png");
    }
    setClicked(!clicked);
  }

    return(
        <div className="box-con-botones" id="principal">
            <div className="box-imagen-texto">
              <div className="box-texto">
                {instrucciones.map((instruccion, index) => <p className="texto-parrafo" key={index}>{index + 1}. {instruccion} </p>)}
              </div>
              <button className="imagen-qr" onClick={showModal}>
                <img src={qr} alt="" id="qr" />
              </button>
            </div>
            <div className="box-auxiliar">
              <div className="box-empty"></div>
              <button className="box-nuevo-qr" id="cambiarQR" onClick={() => changeQR()}>
                Generar Nuevo QR
              </button>
            </div>
        </div>
    )
}

export default BoxQR;