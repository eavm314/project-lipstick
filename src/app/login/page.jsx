import React from "react";
import Link from "next/link";

export default function Login() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: '#F9F8F7', flexDirection: 'column',paddingTop: '5em',paddingBottom: '5em' }}>
      <h1 className="titulo" style={{ fontSize: '4.5em', fontWeight: 'bold' }}>BM</h1>
      <h1 className="texto-normal" style={{ fontSize: '1.25em', marginTop: '1rem', fontWeight: 'normal', marginBottom: '2rem' }}>Inicio de Sesión</h1>
      <input type='text' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: "28.125rem", height: '3.5625rem', padding: "0.75em", marginBottom: '2rem' }}
        placeholder="Correo electrónico"
        name="Correo electrónico"
        className="texto-parrafo" />
      <input type='text' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: "28.125rem", height: '3.5625rem', padding: "0.75em", marginBottom: '2rem' }}
        placeholder="Contraseña"
        name="Contraseña"
        className="texto-parrafo" />
      <Link
        href={"/tienda"}
        className="boton-primario w-175"
        style={{width:'10.9375em'}}>
        Continuar
      </Link>
      <h1 className="texto-normal" style={{ fontSize: '1.25em', marginTop: '1.75rem',  marginBottom: '1.25rem' }}>¿No tienes una cuenta?</h1>
      <Link
        href={"/createAccount"}
        className="boton-secundario w-175"
        style={{width:'10.9375em',marginBottom:'2.5%'}}>
        Regístrate
      </Link>

    </div>
  )
}