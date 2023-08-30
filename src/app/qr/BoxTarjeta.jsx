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
import Dropdown from "../address/Dropdown";

const BoxTarjeta = () => {
    const opcionesTarjeta = [
        {label: "Crédito", value:"cred"},
        {label: "Débito", value:"deb"}
    ];
    const [tipoTarjeta, setTipoTarjeta] = useState("cred");
    const changeTipoTarjeta = (event) => {
        setTipoTarjeta(event.target.value);
      };
    return(
        <div className="w-full">
        <form className="w-full flex items-center justify-center">
        <div className="flex px-5 py-7 items-center justify-center flex-col no-wrap" style={{borderWidth:"1px", borderColor:"#000", backgroundColor:"var(--sec-b-100)", minWidth:"30em", maxWidth:"47.25em"}}>
            <div className="flex gap-8 w-full no-wrap">
                <div className="mb-4" style={{ display: "flex", width: "50%", flexDirection: "column", gap: "0.75em" }}>
                    <label className="texto-normal font-medium" style={{ fontSize: "1.25em" }}>Número de Tarjeta</label>
                    <input 
                        type="text" 
                        className="texto-parrafo" 
                        style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                        placeholder="0000-0000-0000-0000" 
                        name="userNumeroTarjeta" />
                </div>
                <div style={{width: "50%"}}>
                    <Dropdown label="Tipo de Tarjeta" options={opcionesTarjeta} value={tipoTarjeta} onChange={changeTipoTarjeta}></Dropdown>
                </div>
            </div>
            <div className="flex gap-8 flex-start w-full">
                <div className="mb-4" style={{ display: "flex", width: "50%", flexDirection: "column", gap: "0.75em", alignItems:"flex-start"}}>
                    <label className="texto-normal font-medium" style={{ fontSize: "1.25em" }}>Fecha de Expiración</label>
                    <div className="flex flex-row w-full items-start justify-start gap-3">
                        <input 
                            type="text" 
                            className="texto-parrafo" 
                            style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "25%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                            placeholder="MM" 
                            name="mesExpiracion" />
                        <div className="texto-normal font-normal self-center">/</div>
                        <input 
                            type="text" 
                            className="texto-parrafo" 
                            style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "25%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                            placeholder="YYYY" 
                            name="anioExpiracion" />
                    </div>
                </div>
                <div className="mb-4" style={{ display: "flex", width: "50%", flexDirection: "column", gap: "0.75em" }}>
                    <label className="texto-normal font-medium" style={{ fontSize: "1.25em" }}>Código CCV</label>
                    <input 
                        type="text" 
                        className="texto-parrafo" 
                        style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                        placeholder="000000" 
                        name="userCodigoCCV" />
                </div>
            </div>
            <div className="mb-7" style={{ display: "flex", width: "100%", flexDirection: "column", gap: "0.75em" }}>
                    <label className="flex flex-row items-start justify-start text-left texto-normal font-medium w-full" style={{ fontSize: "1.25em" }}>
                    Datos del Titular de la Tarjeta
                    </label>
                    <div className="flex flex-row items-center justify-center w-full gap-8">
                        <input 
                            type="text" 
                            className="texto-parrafo" 
                            style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                            placeholder="Nombre del Titular" 
                            name="userNombreTitular" />
                        <input 
                            type="text" 
                            className="texto-parrafo" 
                            style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                            placeholder="Apellido(s) del Titular" 
                            name="userApellidoTitular" />
                    </div>
            </div>
            <div className="flex items-center justify-center w-full">
                <Link href={""}>
                <button className="boton-primario">Realizar el Pago</button>
                </Link>
            </div>
        </div>
        </form>
        </div>
    )
}

export default BoxTarjeta;