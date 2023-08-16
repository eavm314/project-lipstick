import React from "react";

export default function CreateAccountPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: 120, bottom: 0, left: 0, right: 0, backgroundColor: '#fff9f5', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 759 }}>
                <h1 className="titulo" style={{ fontSize: 32, marginBottom: 12,fontWeight:'bold' }}>Finalizando tu compra</h1>
                <h1 className="subtitulo" style={{ fontSize: 28, marginBottom: 18 }}>¿Dónde enviamos tu pedido?</h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', width: 759, height: 445, backgroundColor: '#ffeee3', borderWidth: 1, borderColor: '#000', justifyContent: 'center', alignItems: 'center' }}>

                <div style={{ width: 718, marginBottom: 8 }}>
                    <h1 className="texto-normal-semibold" style={{ fontSize: 20 }}>Dirección</h1>
                </div>
                <div style={{ width: 718, height: 52, backgroundColor: '#fff9f5', borderWidth: 1, borderColor: '#000', justifyContent: 'center', padding: 12, paddingLeft: 20 }}>
                    <h1 style={{ fontsize: 16 }}>Av. Villarroel Calle 8, Edificio "Las Rosas", Piso 6, Nro.612</h1>
                </div>
                {/*grid style seleccionar*/}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 28 }}>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: 30 }}>
                        <div style={{ width: 344, marginBottom: 8 }}>
                            <h1 className="texto-normal-semibold" style={{ fontSize: 20 }}>Ciudad</h1>
                        </div>
                        <div style={{ width: 344, height: 52, backgroundColor: '#fff9f5', borderWidth: 1, borderColor: '#000', justifyContent: 'center', padding: 12, paddingLeft: 20, marginBottom: 25 }}>
                            <h1 style={{ fontsize: 16 }}>Seleccione opción:</h1>
                        </div>

                        <div style={{ width: 344, marginBottom: 8 }}>
                            <h1 className="texto-normal-semibold" style={{ fontSize: 20 }}>Distrito</h1>
                        </div>
                        <div style={{ width: 344, height: 52, backgroundColor: '#fff9f5', borderWidth: 1, borderColor: '#000', justifyContent: 'center', padding: 12, paddingLeft: 20 }}>
                            <h1 style={{ fontsize: 16 }}>Seleccione opción:</h1>
                        </div>

                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: 344, marginBottom: 8 }}>
                            <h1 className="texto-normal-semibold" style={{ fontSize: 20 }}>Zona</h1>
                        </div>
                        <div style={{ width: 344, height: 52, backgroundColor: '#fff9f5', borderWidth: 1, borderColor: '#000', justifyContent: 'center', padding: 12, paddingLeft: 20, marginBottom: 25 }}>
                            <h1 style={{ fontsize: 16 }}>Seleccione opción:</h1>
                        </div>

                        <div style={{ width: 344, marginBottom: 8 }}>
                            <h1 className="texto-normal-semibold" style={{ fontSize: 20 }}>Número de Teléfono</h1>
                        </div>
                        <div style={{ width: 344, height: 52, backgroundColor: '#fff9f5', borderWidth: 1, borderColor: '#000', justifyContent: 'center', padding: 12, paddingLeft: 20 }}>
                            <h1 style={{ fontsize: 16 }}>Teléfono</h1>
                        </div>
                    </div>
                </div>
                <button style={{fontSize:20,marginTop:28,padding:15,paddingLeft:45,paddingRight:45}} className="boton-primario">Continuar</button>
            </div>
        </div>
    )
};