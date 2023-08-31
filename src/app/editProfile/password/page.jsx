"use client"
import React from "react";
import {useState, useEffect} from 'react';
import "../../globals.css"
import '../../tienda/tienda.css'
import '../../viewItem/resources/paginaIndividual.css'
import Link from "next/link";

const FinCompraPage = () =>{
    return(
        <form>
            <div className="w-full items-center justify-center text-center px-56 py-32 flex flex-col" style={{backgroundColor:"var(--primary--100)"}}>
                <div className="flex items-center justify-center px-5 py-6 flex-col gap-5" style={{borderWidth:"1px", borderColor:"black", maxWidth:"34.75em", minWidth:"30em",backgroundColor:"var(--primary--100)"}}>
                    <div className="subtitulo text-left w-full font-medium" style={{ fontSize: "2em" }}>
                    Nueva Contraseña
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <label className="texto-normal font-normal" style={{ fontSize: "1em" }} >Ingrese su anterior contraseña</label>
                        <input 
                            type="password" 
                            className="texto-parrafo" 
                            style={{ display: "flex", fontSize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                            placeholder="***********" 
                            name="userTelefono" />
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <label className="texto-normal font-normal" style={{ fontSize: "1em" }} >Ingrese su nueva contraseña</label>
                        <input 
                            type="password" 
                            className="texto-parrafo" 
                            style={{ display: "flex", fontSize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                            placeholder="***********" 
                            name="userTelefono" />
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <label className="texto-normal font-normal" style={{ fontSize: "1em" }} >Repita su nueva contraseña</label>
                        <input 
                            type="password" 
                            className="texto-parrafo" 
                            style={{ display: "flex", fontSize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                            placeholder="***********" 
                            name="userTelefono" />
                    </div>
                    <Link className="boton-primario" href={"/profile"}>
                <input type="submit" value="Guardar Contraseña"/>
                </Link>
                </div>
            </div>
        </form>
    );
}

export default FinCompraPage;