"use client"
import { useState } from "react";
import React from "react";
import '../globals.css'
import './qr.css'
import Dropdown from "../address/Dropdown";
import 'reactjs-popup/dist/index.css';
import { useForm } from "react-hook-form";
import { tarjetaValidator, textValidator, ccvValidator } from '@/helpers/validatorText';
import PropTypes from 'prop-types';


const BoxTarjeta = (props) => {
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {/*numTarjeta, setNumTarjeta, validNumTarjeta, setValidNumTarjeta, setCodigoCCV,
         validCCV, setNombre,*/ validNombre, /*setApellido,*/ validApellido,/* evaluate,*/ showModal} = props;
    const opcionesTarjeta = [
        {label: "Crédito", value:"cred"},
        {label: "Débito", value:"deb"}
    ];
    const [tipoTarjeta, setTipoTarjeta] = useState("cred");
    const changeTipoTarjeta = (event) => {
        setTipoTarjeta(event.target.value);
    };
    //const router = useRouter()
  const onSubmit = (data, e) => {
    console.log(data);
    showModal(e);
  }
    return(
        <div className="w-full">
        <form className="w-full flex items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex px-5 py-7 items-center justify-center flex-col no-wrap" style={{borderWidth:"1px", borderColor:"#000", backgroundColor:"var(--sec-b-100)", minWidth:"40em", maxWidth:"47.25em"}}>
            <div className="flex gap-8 w-full no-wrap">
                <div className="mb-4" style={{ display: "flex", width: "50%", flexDirection: "column", gap: "0.75em" }}>
                    <label className="texto-normal font-medium" style={{ fontSize: "1.25em" }}>Número de Tarjeta</label>
                    <input 
                        type="number" 
                        className="texto-parrafo input" 
                        style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                        placeholder="0000-0000-0000-0000" 
                        {...register('numTarjeta', {
                            required: true,
                            maxLength: 16,
                            minLength: 14,
                            validate:tarjetaValidator
                          })}/>
                    {errors.numTarjeta?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
                    {errors.numTarjeta?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>16 caracteres como máximo permitido</h1>}
                    {errors.numTarjeta?.type === 'minLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>14 caracteres como mínimo permitido</h1>}
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
                            type="month" 
                            className="texto-parrafo" 
                            style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                            placeholder="Mes de Año" 
                            name="mesAnioExpiracion"
                            min='2023-09' 
                            {...register('date', {
                                required: true
                              })}/>
                        
                    </div>
                    {errors.date?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
                </div>
                <div className="mb-4" style={{ display: "flex", width: "50%", flexDirection: "column", gap: "0.75em" }}>
                    <label className="texto-normal font-medium" style={{ fontSize: "1.25em" }}>Código CCV</label>
                    <input 
                        type="number" 
                        className="texto-parrafo" 
                        style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                        placeholder="000000" 
                        {...register('numCCV', {
                            required: true,
                            maxLength: 6,
                            minLength: 4,
                            validate:ccvValidator
                          })}/>
                    {errors.numCCV?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
                    {errors.numCCV?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>6 caracteres como máximo permitido</h1>}
                    {errors.numCCV?.type === 'minLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>4 caracteres como mínimo permitido</h1>}
                    
                </div>
            </div>
            <div className="mb-7" style={{ display: "flex", width: "100%", flexDirection: "column", gap: "0.75em" }}>
                    <label className="flex flex-row items-start justify-start text-left texto-normal font-medium w-full" style={{ fontSize: "1.25em" }}>
                    Datos del Titular de la Tarjeta
                    </label>
                    <div className="flex flex-row items-center justify-center w-full gap-8">
                        <div className="flex flex-col justify-left w-full gap-3">
                        <input 
                            type="text" 
                            className="texto-parrafo" 
                            style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                            placeholder="Nombre del Titular" 
                            {...register('nombre', {
                                required: true,
                                maxLength: 25,
                                validate:textValidator
                              })} />
                              {errors.nombre?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
                              {errors.nombre?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>25 caracteres como máximo permitido</h1>}
                              {errors.nombre?.type === 'validate' && <h1 style={{ fontWeight: 500, color: 'red' }}>No se permiten Puntos, Comas, ni guiones en este espacio</h1>}
                        </div>
                        
                        <div className="flex flex-col justify-left w-full gap-3">
                        <input 
                            type="text" 
                            className="texto-parrafo" 
                            style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                            placeholder="Apellido(s) del Titular" 
                            {...register('apellido', {
                                required: true,
                                maxLength: 25,
                                validate:textValidator
                              })}/>
                              {errors.apellido?.type === 'required' && <h1 style={{ fontWeight: 500, color: 'red' }}>*campo obligatorio</h1>}
                              {errors.apellido?.type === 'maxLength' && <h1 style={{ fontWeight: 500, color: 'red' }}>25 caracteres como máximo permitido</h1>}
                              {errors.apellido?.type === 'validate' && <h1 style={{ fontWeight: 500, color: 'red' }}>No se permiten Puntos, Comas, ni guiones en este espacio</h1>}
                              </div>
                    </div>
                    {(!validNombre || !validApellido) ? <div className="texto-normal font-normal flex flex-row items-center justify-center w-full gap-8" style={{fontSize:"1em", color:"var(--sec-a-300)"}}>Debe llenar ambos campos</div> : <></>}
            </div>
            <input className="boton-primario flex items-center justify-center" style={{backgroundColor:'#262626',fontSize:'1.25em'}}
              type="submit"
              value="Realizar el Pago"
              id="submit"
            />
        </div>
        </form>
        </div>
    )
}



BoxTarjeta.propTypes = {
    validNombre: PropTypes.bool.isRequired,
    validApellido: PropTypes.bool.isRequired,
    showModal: PropTypes.func.isRequired,
  };


export default BoxTarjeta;