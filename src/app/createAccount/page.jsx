"use client"
import React from "react";
import { useEffect, useState } from "react";
import '../globals.css'
import Link from "next/link";
import { useRouter } from "next/navigation";
//import { useForm } from "react-hook-form";

const CreateAccount = () => {

    const[name,setName]=useState("")
    const[lastName,setLastName]=useState("")
    const[email,setEmail]=useState("")

    const [passWd, setPasswd] = useState("")
    const [passWd2, setPasswd2] = useState("")

    const [MatchPwd, setMatchPwd] = useState(true)
    const [nullSpaces,setNullSpaces]=useState(false)

    const router = useRouter();

    //const {register,formState:{errors},handleSubmit}=useForm()

    const goToNext = () => {
        const cleanedPwd1=passWd.trim
        const cleanedPwd2=passWd2.trim
        const cleanedEmail=email.trim

        if (cleanedPwd1 === cleanedPwd2 && name.length!==0 && lastName.length!==0 && cleanedEmail!=="" && cleanedPwd1 !== "" && cleanedPwd2!=="") {
            setMatchPwd(true)
            router.push('/tienda')
            
        } else if (cleanedPwd1 !== cleanedPwd2) {
            setMatchPwd(false)
        }else if (name==="" || lastName===""||cleanedEmail===""|| cleanedPwd1 === "" ||cleanedPwd2==="" ) {
            setNullSpaces(true)
        }
    }

    //useEffect()



    return (
        //<form onSubmit={goToNext}>
            <div style={{ display: "flex", backgroundColor: "#f9f8f7", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: "100%", height: "100%", flexWrap: 'nowrap', paddingTop: "5em", paddingBottom: "5em" }}>
                <div style={{ backgroundColor: '#efecea', padding: "2.25em", borderWidth: 1, borderColor: '#000' }}>
                    <div style={{ width: "30.25em", height: "36.75em" }}>
                        <h1 className="titulo" style={{ fontSize: "2em", marginBottom: "2.1875rem" }}>Regístrate</h1>
                        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: "1.25rem", justifyContent: 'space-between' }}>
                            
                            <input type='text' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: "14.5rem", height: 55, padding: "0.75em" }}
                                placeholder="Nombre"
                                name="Nombre"
                                className="texto-parrafo"
                                onChange={(value) => setName(value.target.value)} />
                            <input type='text' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: "14.5rem", height: 55, padding: "0.75em" }}
                                placeholder="Apellido"
                                name="Apellido"
                                className="texto-parrafo" 
                                onChange={(value) => setLastName(value.target.value)}/>
                        </div>
                        <input type='email' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: '100%', height: 55, padding: "0.75em", marginBottom: "1.25em" }}
                            placeholder="Correo electrónico"
                            name="email"
                            className="texto-parrafo" 
                            onChange={(value) => setEmail(value)}/>
                        <h1 className="texto-normal-semibold" style={{ fontSize: "1.25em", marginBottom: "0.6875em" }}>Fecha de Nacimiento</h1>
                        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: "1.25em", justifyContent: 'flex-start' }}>
                            <input type='date' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: "17.25rem", height: 55, padding: "0.75em", marginRight: "2rem" }}
                                placeholder="Dia"
                                name="Dia"
                                className="texto-parrafo"
                                max='2008-08-31'/>

                        </div>
                        <input type='password' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: '100%', height: 55, padding: "0.75em", marginBottom: "1.25em" }}
                            placeholder="Contraseña"
                            name="contra"
                            className="texto-parrafo"
                            onChange={(value) => setPasswd(value)} />
                            
                        <input type='password' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: '100%', height: 55, padding: "0.75em", marginBottom: "0.5em" }}
                            placeholder="Repite contraseña"
                            name="repiteContra"
                            className="texto-parrafo input"
                            onChange={(value) => setPasswd2(value)} />
                        {!MatchPwd && (
                            <p style={{ color: "#BD2222",marginBottom: "0.125rem",paddingLeft:'0.5em' }}>Las contraseñas no coinciden.</p>
                        )}
                        {nullSpaces && (
                            <p style={{ color: "#BD2222",marginBottom: '0.125rem',paddingLeft:'0.5em' }}>No debe dejar casillas sin llenar</p>
                        )}
                        <div style={{ display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column' }}>
                                <input className="boton-primario w-188 my-2"
                                style={{marginTop:"1.25em"}}
                                //href={'/tienda'}
                                onClick={goToNext}
                                type="submit" 
                                value="Crear Cuenta"
                                />
                        </div>
                    </div>
                </div>

            </div>
        //</form>
    );
};
export default CreateAccount;