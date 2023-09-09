"use client"
import React from "react";
import {useState, useEffect} from 'react';
import "../../globals.css"
import '../../tienda/tienda.css'
import '../../viewItem/resources/paginaIndividual.css'
import Dropdown from '../../address/Dropdown'
import Link from "next/link";

const FinCompraPage = () =>{
    const optionsCiudad = [
        { label: 'La Paz', value: 'LP'},
      ];
      const zonasLaPaz = [
        {label: 'Sur', value: 'S'},
        {label: 'Centro', value: 'C'},
        {label: 'Miraflores', value: 'M'},
        {label: 'Villa Copacabana', value: 'VC'},
        {label: 'San Pedro', value: 'SP'}
      ]
      const distritosLaPaz = [
        {label: 'Sur', value: 'S'},
        {label: 'San Antonio', value: 'SA'},
        {label: 'Periferica', value: 'P'},
        {label: 'Max Paredes', value: 'MP'},
        {label: 'Cotahuma', value: 'C'}
      ]
      const [ciudad, setCiudad] = useState('LP');
      const [zonas, setZonas] = useState(zonasLaPaz);
      const [zona, setZona] = useState('S');
      const [distritos, setDistritos] = useState(distritosLaPaz);
      const [distrito, setDistrito] = useState('S')
    
      const changeCiudad = (event) => {
        setCiudad(event.target.value);
      };
      const changeZona = (event) => {
        setZona(event.target.value);
      };
      const changeDistrito = (event) => {
        setDistrito(event.target.value);
      };
    return(
        <form>
            <div className="w-full items-center justify-center text-center px-56 py-12 flex flex-col" style={{backgroundColor:"var(--primary--100)"}}>
                <div className="titulo text-left w-full" style={{ fontSize: "2em", paddingBottom:"1rem"}}>Editar Datos de Perfil</div>
                <div className="subtitulo text-left w-full" style={{ fontSize: "1.75em", paddingBottom:"2rem"}}>Ingrese los nuevos datos</div>
                <div className="flex items-center justify-center px-5 py-6 flex-col gap-5" style={{borderWidth:"1px", borderColor:"black", maxWidth:"47.5em", minWidth:"40em",backgroundColor:"var(--primary--100)"}}>
                    <div className="flex flex-row w-full gap-4">
                        <div className="flex" style={{ display: "flex", width: "50%", flexDirection: "column", gap: "0.75em" }}>
                        <label className="texto-normal" style={{ fontSize: "1.25em" }} >Nombre</label>
                        <input 
                            type="text" 
                            className="texto-parrafo" 
                            style={{ display: "flex", fontSize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                            placeholder="Dylan" 
                            name="userTelefono" />
                        </div>
                        <div className="flex" style={{ display: "flex", width: "50%", flexDirection: "column", gap: "0.75em" }}>
                        <label className="texto-normal" style={{ fontSize: "1.25em" }} >Apellido</label>
                        <input 
                            type="text" 
                            className="texto-parrafo" 
                            style={{ display: "flex", fontSize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                            placeholder="Dylan" 
                            name="userTelefono" />
                        </div>
                    </div>
            <div className="flex" style={{ display: "flex", width: "100%", flexDirection: "column", gap: "0.75em" }}>
              <label className="texto-normal" style={{ fontSize: "1.25em" }}>Dirección</label>
              <input 
                type="text" 
                className="texto-parrafo" 
                style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                placeholder="Av. Villarroel Calle 8, Edificio 'Las Rosas', Piso 6, Nro.612" 
                name="userDireccion" />
            </div>
            {/*grid style seleccionar*/}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "2em", width: "100%" }}>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: "50%", gap: "1.75em" }}>
              <Dropdown label="Ciudad" options={optionsCiudad} value={ciudad} onChange={changeCiudad}/>

              <Dropdown label="Distrito" options={distritos} value={distrito} onChange={changeDistrito}/>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: "50%", gap: "1.75em" }}>

              <Dropdown label="Zona" options={zonas} value={zona} onChange={changeZona}/>

                <div style={{ display: "flex", width: "100%", flexDirection: "column", gap: "0.75em" }}>
                  <label className="texto-normal" style={{ fontSize: "1.25em" }} >Teléfono</label>
                  <input 
                    type="number" 
                    className="texto-parrafo" 
                    style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                    placeholder="7777777" 
                    name="userTelefono" />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8">
                <Link className="boton-primario" href={"/profile"}>
                <input type="submit" value="Guardar Cambios"/>
                </Link>
                <Link className="boton-advertencia" href={"/profile"}>
                <button>Cancelar Cambios</button>
                </Link>
            </div>
            
                </div>
            </div>
        </form>
    );
}

export default FinCompraPage;