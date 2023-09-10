"use client"
import React from "react";
import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { appendErrors, useForm } from "react-hook-form";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Login2 = () => {


  const [seePwd, setSeePwd] = useState(false)
  const [seeRptPwd, setSeeRptPwd] = useState(false)

  const { register,formState:{errors}, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  const enablePwd = () => {
    setSeePwd(!seePwd)
  }

  const enableRptPwd = () => {
    setSeeRptPwd(!seeRptPwd)
  }


  return (
    <div style={{ display: "flex", backgroundColor: "#f9f8f7", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: "100%", height: "100%", flexWrap: 'nowrap', paddingTop: "5em", paddingBottom: "5em" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ backgroundColor: '#f9f8f7', padding: "2.25em", borderWidth: 1, borderColor: '#000' }}>

          <h1 className="titulo" style={{ fontSize: "2em", marginBottom: "1.25rem" }}>Regístrate</h1>

          <div style={{ display: 'flex', flexDirection: 'column' ,marginBottom: "1.25em"}}>
            <h1 className="texto-normal-semibold" style={{ fontSize: "1.25em", marginBottom: "0.6875em", fontWeight: '500' }}>Nombre Completo*</h1>
            <input type='text' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: '100%', height: 55, padding: "0.75em",  width: "30.5rem" }}
              placeholder="Ej: Diego Andres Garcia Peralta"
              //name="Nombre Completo"
              className="texto-parrafo"
              {...register('nombre', {
                required:true,
              })}
            />
            {errors.nombre?.type==='required' && <h1 style={{fontWeight:500,color:'red'}}>*campo obligatorio</h1>}

          </div>

          <div style={{ display: 'flex', flexDirection: 'column',marginBottom: "1.25em" }}>
            <h1 className="texto-normal-semibold" style={{ fontSize: "1.25em", marginBottom: "0.6875em", fontWeight: '500' }}>Correo Electrónico*</h1>
            <input type='email' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: '100%', height: 55, padding: "0.75em", width: "30.5rem" }}
              placeholder="Ej.: daniel9000@gmail.com"
              //name="Correo electrónico"
              className="texto-parrafo"
              {...register('email',{
                required:true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
              })}
            />
            {errors.email?.type==='required' && <h1 style={{fontWeight:500,color:'red'}}>*campo obligatorio</h1>}
            {errors.email?.type==='pattern' && <h1 style={{fontWeight:500,color:'red'}}>El email ingresado no tiene un formato válido</h1>}

          </div>

          <div style={{ display: 'flex', flexDirection: 'column',marginBottom: "1.25em" }}>
            <h1 className="texto-normal-semibold" style={{ fontSize: "1.25em", marginBottom: "0.6875em", fontWeight: '500' }}>Fecha de Nacimiento*</h1>
            <input type='date' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: '100%', height: 55, padding: "0.75em", width: "30.5rem" }}
              placeholder="Dia"
              //name="Dia"
              className="texto-parrafo"
              max='2008-08-31'
              {...register('fecha',{
                required:true,
              })} />
            {errors.fecha?.type==='required' && <h1 style={{fontWeight:500,color:'red'}}>*campo obligatorio</h1>}
            
          </div>

          <div style={{ display: 'flex', flexDirection: 'column',marginBottom: "1.25em" }}>
            <h1 className="texto-normal-semibold" style={{ fontSize: "1.25em", marginBottom: "0.6875em", fontWeight: '500' }}>Contraseña*</h1>
            <div style={{ height: 55, display: 'flex', flexDirection: 'row',  width: "30.5rem" }}>
              <input type={seePwd ? 'text' : 'password'} style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderRightWidth: 0, borderColor: '#000', backgroundColor: '#f9f8f7', width: '100%', height: 55, padding: "0.75em" }}
                placeholder="Min. 8 caracteres, 1 digito, y una letra mayúscula."
                name="Contraseña"
                className="texto-parrafo"
                {...register('password',{
                  required:true,
                  minLength:8
                })} 
              />
              <div style={{ display: 'flex', width: 55, height: 55, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f8f7', borderWidth: 1, borderLeftWidth: 0, borderColor: '#000' }}>
                <FontAwesomeIcon icon={seePwd ? faEye : faEyeSlash} size="sm" color="#000" onClick={enablePwd} />
              </div>
            </div>
            {errors.password?.type==='required' && <h1 style={{fontWeight:500,color:'red'}}>*campo obligatorio</h1>}
            {errors.password?.type==='minLength' && <h1 style={{fontWeight:500,color:'red'}}>La contraseña debe tener 8 caracteres mínimo</h1>}

          </div>

          <div style={{ display: 'flex', flexDirection: 'column',marginBottom: "1.25em" }}>
            <h1 className="texto-normal-semibold" style={{ fontSize: "1.25em", marginBottom: "0.6875em", fontWeight: '500' }}>Repite Contraseña*</h1>
            <div style={{ height: 55, display: 'flex', flexDirection: 'row',  width: "30.5rem" }}>
              <input type={seeRptPwd ? 'text' : 'password'} style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderRightWidth: 0, borderColor: '#000', backgroundColor: '#f9f8f7', width: '100%', height: 55, padding: "0.75em" }}
                placeholder="Introduzca la misma contraseña ingresada anteriormente"
                name="Repite Contraseña"
                className="texto-parrafo"
                {...register('password2',{
                  required:true,
                  minLength:8
                })} 
              />
              <div style={{ display: 'flex', width: 55, height: 55, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f8f7', borderWidth: 1, borderLeftWidth: 0, borderColor: '#000' }}>
                <FontAwesomeIcon icon={seeRptPwd ? faEye : faEyeSlash} size="sm" color="#000" onClick={enableRptPwd} />
              </div>
            </div>
            {errors.password2?.type==='required' && <h1 style={{fontWeight:500,color:'red'}}>*campo obligatorio</h1>}
            {errors.password2?.type==='minLength' && <h1 style={{fontWeight:500,color:'red'}}>La contraseña debe tener 8 caracteres mínimo</h1>}

          </div>

          <div style={{ display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column' }}>
            <input className="boton-primario w-188 my-2"
              type="submit"
              value="Crear Cuenta"
            />
          </div>



        </div>
      </form>
    </div>
  )
}

export default Login2