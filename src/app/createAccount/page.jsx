import React from "react";
import '../qr/qr.css'
import '../globals.css'

export default function CreateAccountPage() {
    const em=16;
    return (
        <div style={{ display: "flex", alignItems: "center", alignContent: "center", paddingTop: (5*em), paddingBottom: (5*em), paddingLeft:"20%", paddingRight:"20%", justifyContent: "center", flexDirection: "column",  flexWrap:'nowrap', backgroundColor:'var(--sec-b-200)' }}>
            <div style={{ display: "flex", alignItems: "center", alignContent: "center", width:'100%', justifyContent: "center", flexDirection: "column", flexWrap:'nowrap'}}>

                <div className="titulo" style={{fontSize: (em*2), fontWeight:'var(--weight-bold)', width: "100%", paddingBottom:(2*em)}}>
                Finalizando tu compra
                </div>
                <div className="subtitulo" style={{fontSize: (em*1.75), width: '100%', paddingBottom:(1.75*em)}}>
                ¿Dónde enviamos tu pedido?
                </div>

                <div className="box-con-botones" style={{ gap:em*1.75, width: "100%"}}>

                        <form style={{ display:"flex", width:"100%", flexDirection: "column", gap:0.75*em}}>
                            <label className="texto-normal-semibold" style={{ fontSize: 1.25*em }} for="userDireccion">Dirección</label>
                            <input type="text" className="texto-parrafo" style={{ display: "flex", fontsize: em, color:'var(--primary-300)', borderWidth: 1, borderColor: '#000', width: "100%", padding: 0.75*em, backgroundColor: 'var(--transicion-50)'}} value="Av. Villarroel Calle 8, Edificio 'Las Rosas', Piso 6, Nro.612" name="userDireccion"/>
                        </form>
                        {/*grid style seleccionar*/}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2*em, width:"100%"}}>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width:"50%", gap:1.75*em}}>
                        <form style={{ display:"flex", width:"100%", flexDirection: "column", gap:0.75*em }}>
                            <label className="texto-normal-semibold" style={{ fontSize: 1.25*em }} for="userCiudad">Ciudad</label>
                            <input type="text" className="texto-parrafo" style={{ display: "flex", fontsize: em, color:'var(--primary-300)', borderWidth: 1, borderColor: '#000', width: "100%", padding: 0.75*em, backgroundColor: 'var(--transicion-50)'}} defaultValue="La Paz" name="userCiudad"/>
                        </form>

                        <form style={{ display:"flex", width:"100%", flexDirection: "column", gap:0.75*em }}>
                            <label className="texto-normal-semibold" style={{ fontSize: 1.25*em }} for="userDistrito">Distrito</label>
                            <input type="text" className="texto-parrafo" style={{ display: "flex", fontsize: em, color:'var(--primary-300)', borderWidth: 1, borderColor: '#000', width: "100%", padding: 0.75*em, backgroundColor: 'var(--transicion-50)'}} value="La Paz" name="userDistrito"/>
                        </form>
    

                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width:"50%", gap:1.75*em}}>

                        <form style={{ display:"flex", width:"100%", flexDirection: "column", gap:0.75*em }}>
                            <label className="texto-normal-semibold" style={{ fontSize: 1.25*em }} for="userZona">Zona</label>
                            <input type="text" className="texto-parrafo" style={{ display: "flex", fontsize: em, color:'var(--primary-300)', borderWidth: 1, borderColor: '#000', width: "100%", padding: 0.75*em, backgroundColor: 'var(--transicion-50)'}} value="San Pedro" name="userZona"/>
                        </form>

                        <form style={{ display:"flex", width:"100%", flexDirection: "column", gap:0.75*em }}>
                            <label className="texto-normal-semibold" style={{ fontSize: 1.25*em }} for="userTelefono">Teléfono</label>
                            <input type="text" className="texto-parrafo" style={{ display: "flex", fontsize: em, color:'var(--primary-300)', borderWidth: 1, borderColor: '#000', width: "100%", padding: 0.75*em, backgroundColor: 'var(--transicion-50)'}} value="7777777" name="userTelefono"/>
                        </form>
                        </div>
                    </div>
                    <button style={{fontSize:1.25*em}} className="boton-primario">Continuar</button>
                </div>
            </div>
        </div>
    )
};