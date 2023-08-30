import React from "react";
import Link from "next/link";
const CreateAccount = () => {
    const em = 16
    return (
        <>
        <div style={{ display: "flex", backgroundColor: "#fff", flexDirection: 'column', justifyContent: 'center', alignItems: 'center',width:"100%",height:"100%",flexWrap:'nowrap', paddingTop: "5em", paddingBottom: "5em"}}>
            <div style={{ backgroundColor: '#efecea', padding: "2.25em", borderWidth: 1, borderColor: '#000' }}>
                <div style={{ width: "30.25em", height: "36.75em" }}>
                    <h1 className="titulo" style={{ fontSize: "2em", marginBottom: "2.1875rem" }}>Regístrate</h1>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: "1.25rem", justifyContent: 'space-between' }}>
                        <input type='text' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: "14.5rem", height: 55, padding: "0.75em" }}
                            placeholder="Nombre"
                            name="Nombre"
                            className="texto-parrafo" />
                        <input type='text' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: "14.5rem", height: 55, padding: "0.75em" }}
                            placeholder="Apellido"
                            name="Apellido"
                            className="texto-parrafo" />
                    </div>
                    <input type='text' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: '100%', height: 55, padding: "0.75em", marginBottom: "1.25em" }}
                        placeholder="Correo electrónico"
                        name="correo electronico"
                        className="texto-parrafo" />
                    <h1 className="texto-normal-semibold" style={{ fontSize: "1.25em", marginBottom: "0.6875em" }}>Fecha de Nacimiento</h1>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: "1.25em", justifyContent: 'flex-start' }}>
                        <input type='date' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: "17.25rem", height: 55, padding: "0.75em", marginRight: "2rem" }}
                            placeholder="Dia"
                            name="Dia"
                            className="texto-parrafo" />
                        
                    </div>
                    <input type='text' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: '100%', height: 55, padding: "0.75em", marginBottom: "1.25em" }}
                        placeholder="Contraseña"
                        name="Contraseña"
                        className="texto-parrafo" />
                    <input type='text' style={{ display: 'flex', fontSize: "1.125em", borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: '100%', height: 55, padding: "0.75em", marginBottom: "1.25em" }}
                        placeholder="Repite contraseña"
                        name="Repite contraseña"
                        className="texto-parrafo" />
                    <div style={{ display: 'flex', width: '100%', alignItems: 'center' ,flexDirection:'column'}}>
                        <div style={{justifyContent:'center'}}>
                            <h1 className="texto-parrafo" style={{fontSize:"1.125em"}}>Acepto los 
                                <Link 
                                className="texto-parrafo" 
                                style={{fontSize:"1.125rem", fontWeight:'bold',marginLeft:2.5}}
                                href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}> Términos y Condiciones</Link>
                                
                                {/*TODO: IMPLEMENTAR SISTEMA DE TICKEADO*/}
                                <view style={{width:24,height:24,backgroundColor:'#c7c7c7',margin:5,marginLeft:10}}/>
                            </h1>
                             
                        </div>
                        <Link
                            href={"/tienda"}
                            className="boton-primario w-188 my-2">
                            Crear Cuenta
                        </Link>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
};
export default CreateAccount