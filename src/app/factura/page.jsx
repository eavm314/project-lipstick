"use client"
import { useEffect, useState } from "react";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";
import '../globals.css'
import '../qr/qr.css'
import Link from "next/link";
import Dropdown from "../address/Dropdown";

const FacturaPage = () =>{
    return(
        <form>
    <div style={{ display: "flex", alignItems: "center", alignContent: "center", padding: "5em 25em", justifyContent: "center", flexDirection: "column", flexWrap: 'nowrap', backgroundColor: 'var(--sec-b-200)' }}>
    <div style={{ display: "flex", alignItems: "center", alignContent: "center", width: '100%', justifyContent: "center", flexDirection: "column", flexWrap: 'nowrap' }}>
        <div className="titulo" style={{ fontSize: "2em", fontWeight: 'var(--weight-bold)', width: '100%', paddingBottom: "2rem" }}>
          Finalizando tu compra
        </div>
        <div className="subtitulo" style={{ fontSize: "1.75em", width: '100%', paddingBottom: "1.75rem" }}>
          Pago del pedido
        </div>
        <div className="box-con-botones" style={{width:"50%"}}>
                <div className="mb-4" style={{ display: "flex", width: "100%", flexDirection: "column", gap: "0.75em" }}>
                    <label className="texto-normal font-medium" style={{ fontSize: "1.25em" }}>Razón Social</label>
                    <input 
                        type="text" 
                        className="texto-parrafo" 
                        style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                        placeholder="Ej. Perez" 
                        name="userRazonSocial" />
                </div>
                <div className="mb-4" style={{ display: "flex", width: "100%", flexDirection: "column", gap: "0.75em" }}>
                    <label className="texto-normal font-medium" style={{ fontSize: "1.25em" }}>NIT</label>
                    <input 
                        type="number" 
                        className="texto-parrafo" 
                        style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                        placeholder="77777777" 
                        name="userNIT" />
                </div>
                <Link className="boton-primario" href={"/address"}>
                <input type="submit" value="Continuar"/>
                </Link>
        </div>
    </div>
    </div>
        </form>
    )
}

export default FacturaPage;