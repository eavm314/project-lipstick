"use client"
import React from 'react';
import { useState } from "react";
import '../globals.css'
import './qr.css'
import PropTypes from 'prop-types';



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

 // const {productosComprados,setProductosComprados} = useProductosCompradosContext();
  const click = (e) =>{
    showModal(e);
  }

    return(
        <div className="box-con-botones" id="principal">
            <div className="box-imagen-texto">
              <div className="box-texto">
                {instrucciones.map((instruccion, index) => <p className="texto-parrafo" key={index}>{index + 1}. {instruccion} </p>)}
              </div>
              <button className="imagen-qr" onClick={click} id="realizarPago">
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



BoxQR.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default BoxQR;