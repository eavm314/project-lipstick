"use client"
import { useCallback, useEffect, useState } from "react";
import React from "react";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";
import '../globals.css'
import './qr.css'
import Link from "next/link";
import BoxQR from "./BoxQR";
import BoxTarjeta from "./BoxTarjeta";
import { useMetodoPagoContext } from "../layout";
import { useRouter } from "next/navigation";
import Modal from 'react-modal';

const QRPage = () => {
  const { metodoPago, setMetodoPago } = useMetodoPagoContext();
  const [imageIndex, setImageIndex] = useState(2);
  const em = 16;
  var index = 1;

  const [selectedMethod, setSelectedMethod] = useState(metodoPago);

  const cambiarMethod = (num) => {
    setMetodoPago(num)
  }

  const [numTarjeta, setNumTarjeta] = useState("1234123412341234");
  const [validNumTarjeta, setValidNumTarjeta] = useState(true);

  const [codigoCCV, setCodigoCCV] = useState("1234");
  const [validCCV, setValidCCV] = useState(true);

  const [nombre, setNombre] = useState("");
  const [validNombre, setValidNombre] = useState(true);

  const [apellido, setApellido] = useState("");
  const [validApellido, setValidApellido] = useState(true);

  const router = useRouter();

  const evaluate = (e) => {
    e.preventDefault();
    if (nombre !== "" && apellido != "") {
      setValidNombre(true);
      setValidApellido(true);
      setValidNumTarjeta(/^[0-9]{13,16}$/.test(numTarjeta));
      setValidCCV(/^[0-9]{4,6}$/.test(codigoCCV));
      if (validApellido && validNombre && validCCV && validNumTarjeta) {
        router.push('/finCompra')
      }
    } else {
      setValidApellido(false);
      setValidNombre(false);
      setValidNumTarjeta(/^[0-9]{13,16}$/.test(numTarjeta));
      setValidCCV(/^[0-9]{4,6}$/.test(codigoCCV));
    }
  }

  const finDeCompra = (e) => {
    e.preventDefault();
    setTimeout(goToTienda, 5000);
    goToTienda = () => {
        router.push('/tienda')
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  const showModal = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen)
    const goToTienda = () => {
      router.push('/tienda')
    }
    setTimeout(goToTienda, 5000);
}

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content: {
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      padding: '1.25em',
      width: '40%',
      height: '10%'
    }
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
        
        <div className="texto-normal gap-7 flex flex-nowrap font-medium" style={{ fontSize: "1.5em", width: '100%', paddingBottom: "3rem" }}>
          <div className={"opciones" + (metodoPago === 1 ? " underline" : "")} onClick={() => cambiarMethod(1)}>Tarjeta</div>
          <div className={"opciones" + (metodoPago === 0 ? " underline" : "")} onClick={() => cambiarMethod(0)}>Código QR</div>
        </div>
        <>
        
        {metodoPago === 0 ? 
          <BoxQR showModal={showModal} />
          : <BoxTarjeta numTarjeta={numTarjeta} setNumTarjeta={setNumTarjeta} validNumTarjeta={validNumTarjeta} setValidNumTarjeta={setValidNumTarjeta}
           setCodigoCCV={setCodigoCCV} validCCV={validCCV} setNombre={setNombre} validNombre={validNombre} setApellido={setApellido} validApellido={validApellido} 
            evaluate={evaluate} finDeCompra={finDeCompra} showModal={showModal} />
        }
        
        </>
        <Modal isOpen={isOpen} style={customStyles}>
          <div className="texto-normal font-normal flex w-full h-full justify-center items-center">Se realizó el pago de manera exitosa</div>
        </Modal>
        
      </div>
    </div>
  )
}

export default QRPage;