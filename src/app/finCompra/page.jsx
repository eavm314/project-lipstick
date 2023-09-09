"use client"
import React from "react";
import {useState, useEffect} from 'react';
import "../globals.css"
import '../tienda/tienda.css'
import '..//viewItem/resources/paginaIndividual.css'
import Link from "next/link";
import { useProductosCompradosContext } from "../layout";

const FinCompraPage = () =>{
    const {productosComprados} = useProductosCompradosContext();
    return(
        <>
        <div className="w-full items-center justify-center text-center px-56 py-9 flex flex-col">
            <div className="titulo items-center justify-center text-center w-full" style={{fontSize:"2em", borderBottomWidth: 1, borderColor: '#000', paddingBottom:"1rem"}}>
                Resumen de Compra
            </div>
            <div className="flex flex-col w-full items-center justify-center py-6 gap-5">
                <div className="subtitulo w-3/4 text-left" style={{fontSize:"1.75em"}}>
                    Productos
                </div>
                <div className="items-center justify-center text-center w-full flex flex-col gap-5" style={{borderBottomWidth: 1, borderColor: '#000', paddingBottom:"1.75em"}}>
                {productosComprados.map(paquete => 
                    <div className="flex flex-row w-2/3 items-center justify-center gap-4">
                        <div className="texto-normal font-medium text-left w-2/4" style={{fontSize:"1.25em"}}>
                            {paquete.product.nombre}
                        </div>
                        <div className="texto-normal font-normal text-center w-1/4" style={{fontSize:"1.25em"}}>
                            {paquete.precio/paquete.product.precio}u
                        </div>
                        <div className="texto-normal font-normal text-right w-1/4" style={{fontSize:"1.25em"}}>
                            ${paquete.precio}
                        </div>
                    </div>
                    )}
                </div>
            </div>
            <Link className="boton-primario" href={"/tienda"}>Volver a Tienda</Link>
        </div>
        </>
    );
}

export default FinCompraPage;