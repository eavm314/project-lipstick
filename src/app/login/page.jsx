"use client";
import React from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Login() {

  const supabase = createClientComponentClient();

  const handleSignInGoogle = async () => {
    console.log("ingresar con google")
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`, //url dinamica
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
      
      <button
        onClick={handleSignInGoogle}
        style={{ display: 'flex', flexDirection: 'row', width: '15em', paddingLeft: '0.5rem', paddingRight: '1rem', paddingTop: '1em', paddingBottom: '1em', marginBottom: '2.5%', boxShadow: '0px 5px 10px #00000090', alignItems: 'center' }}
        id="login">
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/353/285/non_2x/colourful-google-logo-on-white-background-free-vector.jpg"
          style={{ height: '2rem', width: '2rem', borderRadius: 100, marginRight: '0.5em', marginLeft: '0.5em' }} />
        <h1 style={{ fontWeight: '500' }}>Continuar con Google</h1>
      </button>

    </div>
  )
}