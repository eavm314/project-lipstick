"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Login() {

  const supabase = createClientComponentClient();

  const handleSignInGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      }
    })
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: '#F9F8F7', flexDirection: 'column', paddingTop: '5em', paddingBottom: '5em' }}>
      <h1 className="titulo" style={{ fontSize: '4.5em', fontWeight: 'bold' }}>BM</h1>
      <h1 className="texto-normal" style={{ fontSize: '1.25em', marginTop: '1rem', fontWeight: 'normal', marginBottom: '2rem' }}>Inicio de Sesión</h1>
      <input type='email' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: "28.125rem", height: '3.5625rem', padding: "0.75em", marginBottom: '2rem' }}
        placeholder="Correo electrónico"
        name="Correo electrónico"
        className="texto-parrafo" />
        <input type='password' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: "28.125rem", height: '3.5625rem', padding: "0.75em", marginBottom: '2rem' }}
        placeholder="Contraseña"
        name="Contraseña"
        className="texto-parrafo" />
      
      <Link
        href={"/tienda"}
        className="boton-primario w-175"
        style={{ width: '15em' }}>
        Continuar
      </Link>
      <h1 className="texto-normal" style={{ fontSize: '1.25em', marginTop: '1.75rem', marginBottom: '1.25rem' }}>¿No tienes una cuenta?</h1>
      <Link
        href={"/createAccount"}
        className="boton-secundario w-175"
        style={{ width: '15em', marginBottom: '1.25rem' }}>
        Regístrate
      </Link>
      <button
        onClick={handleSignInGoogle}

        style={{ display: 'flex', flexDirection: 'row', width: '15em', paddingLeft: '0.5rem', paddingRight: '1rem', paddingTop: '1em', paddingBottom: '1em', marginBottom: '2.5%', boxShadow: '0px 5px 10px #00000090', alignItems: 'center' }}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/353/285/non_2x/colourful-google-logo-on-white-background-free-vector.jpg"
          style={{ height: '2rem', width: '2rem', borderRadius: 100, marginRight: '0.5em', marginLeft: '0.5em' }} />
        <h1 style={{ fontWeight: '500' }}>Continuar con Google</h1>
      </button>

    </div>
  )
}