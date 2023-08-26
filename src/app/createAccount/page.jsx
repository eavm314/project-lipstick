import React from "react";
import Link from "next/link";
const CreateAccount = () => {
    const em = 16
    return (
        <div style={{ display: "flex", backgroundColor: "#fff", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            <div style={{ backgroundColor: '#efecea', padding: 36, borderWidth: 1, borderColor: '#000' }}>
                <div style={{ width: 30.25 * 16, height: 36.75 * 16 }}>
                    <h1 className="titulo" style={{ fontSize: 2 * 16, marginBottom: 35 }}>Regístrate</h1>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 16 * 1.25, justifyContent: 'space-between' }}>
                        <input type='text' style={{ display: 'flex', fontSize: 18, borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: 14.5 * 16, height: 55, padding: 0.75 * 16 }}
                            placeholder="Nombre"
                            name="Nombre"
                            className="texto-parrafo" />
                        <input type='text' style={{ display: 'flex', fontSize: 18, borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: 14.5 * 16, height: 55, padding: 0.75 * 16 }}
                            placeholder="Apellido"
                            name="Apellido"
                            className="texto-parrafo" />
                    </div>
                    <input type='text' style={{ display: 'flex', fontSize: 18, borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: '100%', height: 55, padding: 0.75 * 16, marginBottom: 16 * 1.25 }}
                        placeholder="Correo electrónico"
                        name="correo electronico"
                        className="texto-parrafo" />
                    <h1 className="texto-normal-semibold" style={{ fontSize: 16 * 1.25, marginBottom: 16 * 0.6875 }}>Fecha de Nacimiento</h1>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 16 * 1.25, justifyContent: 'flex-start' }}>
                        <input type='text' style={{ display: 'flex', fontSize: 18, borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: 5.75 * 16, height: 55, padding: 0.75 * 16, marginRight: 2 * 16 }}
                            placeholder="Dia"
                            name="Dia"
                            className="texto-parrafo" />
                        <input type='text' style={{ display: 'flex', fontSize: 18, borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: 5.75 * 16, height: 55, padding: 0.75 * 16, marginRight: 2 * 16 }}
                            placeholder="Mes"
                            name="Mes"
                            className="texto-parrafo" />
                        <input type='text' style={{ display: 'flex', fontSize: 18, borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: 5.75 * 16, height: 55, padding: 0.75 * 16, marginRight: 2 * 16 }}
                            placeholder="Año"
                            name="Año"
                            className="texto-parrafo" />
                    </div>
                    <input type='text' style={{ display: 'flex', fontSize: 18, borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: '100%', height: 55, padding: 0.75 * 16, marginBottom: 16 * 1.25 }}
                        placeholder="Contraseña"
                        name="Contraseña"
                        className="texto-parrafo" />
                    <input type='text' style={{ display: 'flex', fontSize: 18, borderWidth: 1, borderColor: '#000', backgroundColor: '#f9f8f7', width: '100%', height: 55, padding: 0.75 * 16, marginBottom: 16 * 1.25 }}
                        placeholder="Repite contraseña"
                        name="Repite contraseña"
                        className="texto-parrafo" />
                    <div style={{ display: 'flex', width: '100%', alignItems: 'center' ,flexDirection:'column'}}>
                        <div style={{justifyContent:'center'}}>
                            <h1 className="texto-parrafo" style={{fontSize:16*1.125}}>Acepto los 
                                <Link 
                                className="texto-parrafo" 
                                style={{fontSize:16*1.125, fontWeight:'bold',marginLeft:2}}
                                href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}> Términos y Condiciones</Link>
                                
                                {/*TODO: IMPLEMENTAR SISTEMA DE TICKEADO*/}
                                <view style={{width:24,height:24,backgroundColor:'#c7c7c7',margin:5,marginLeft:10}}/>
                            </h1>
                             
                        </div>
                        <Link
                            href={"/tienda"}
                            className="boton-primario w-188 my-3">
                            Crear Cuenta
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default CreateAccount