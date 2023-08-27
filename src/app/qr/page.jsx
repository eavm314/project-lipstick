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

const instrucciones = ["Ingrese a su aplicacíon de su Banco en su dispositivo móvil.",
  "Ingrese a la opción de Pago QR en su aplicación.",
  "Capture el Código QR que aparece en Pantalla con la cámara de su Celular.",
  "Una vez realizado el pago, espere unos segundos hasta que reciba una confirmación de pago."];





const QRPage = () => {
  const [imageIndex, setImageIndex] = useState(2);
  const em = 16;
  var index = 1;
  const changeImage = () => {
    useEffect(() => {
      const e = document.getElementById("qr")
      e.src = e.alt;
      e.alt = e.src;
    }, []);
  }

  const [selectedMethod, setSelectedMethod] = useState(0);

  const cambiarMethod = (num) =>{
    setSelectedMethod(num)
  }

  return (
    <div style={{ display: "flex", alignItems: "center", alignContent: "center", padding: "5em 25em", justifyContent: "center", flexDirection: "column", flexWrap: 'nowrap', backgroundColor: 'var(--sec-b-200)' }}>
      <div style={{ display: "flex", alignItems: "center", alignContent: "center", width: '100%', justifyContent: "center", flexDirection: "column", flexWrap: 'nowrap' }}>
        <div className="titulo" style={{ fontSize: "2em", fontWeight: 'var(--weight-bold)', width: '100%', paddingBottom: "2rem" }}>
          Finalizando tu compra
        </div>
        <div className="subtitulo" style={{ fontSize: "1.75em", width: '100%', paddingBottom: "1.75rem" }}>
          Pago del pedido
        </div>
        <div className="texto-normal gap-7 flex flex-nowrap font-medium" style={{ fontSize: "1.5em", width: '100%', paddingBottom: "1.5rem"}}>
          <div className={"opciones"+(selectedMethod===1? " underline":"")} onClick={() => cambiarMethod(1)}>Tarjeta</div>
          <div className={"opciones"+(selectedMethod===0? " underline":"")} onClick={() => cambiarMethod(0)}>Código QR</div>
        </div>
        <>
        {selectedMethod===0 ? 
          <div className="box-con-botones" id="principal">
            <div className="box-imagen-texto">
              <div className="box-texto">
                {instrucciones.map((instruccion, index) => <p className="texto-parrafo">{index + 1}. {instruccion} </p>)}
              </div>
              <Link href={""} className="imagen-qr">
                <img src={"/qr" + index + ".png"} alt="/qr2.png" id="qr" />
              </Link>
            </div>
            <div className="box-auxiliar">
              <div className="box-empty"></div>
              <button className="box-nuevo-qr" id="cambiarQR" onClick={() => { document.getElementById("qr").src = "/qr2.png" }}>
                Generar Nuevo QR
              </button>
            </div>
          </div>
          : <></>
        }
        </>
        
      </div>
    </div>
  )
}

export default QRPage;