import Link from "next/link";
import React from "react";
import '../qr/qr.css'
import '../globals.css'

export default function CreateAccountPage() {
  const em = 16;
  return (
    <div style={{ display: "flex", alignItems: "center", alignContent: "center", paddingTop: "5em", paddingBottom: "5em", paddingLeft: "20%", paddingRight: "20%", justifyContent: "center", flexDirection: "column", flexWrap: 'nowrap', backgroundColor: 'var(--sec-b-200)' }}>
      <div style={{ display: "flex", alignItems: "center", alignContent: "center", width: '100%', justifyContent: "center", flexDirection: "column", flexWrap: 'nowrap' }}>

        <div className="titulo" style={{ fontSize: "2em", fontWeight: 'var(--weight-bold)', width: "100%", paddingBottom: "2rem" }}>
          Finalizando tu compra
        </div>
        <div className="subtitulo" style={{ fontSize: "1.75em", width: '100%', paddingBottom: "1.75rem" }}>
          ¿Dónde enviamos tu pedido?
        </div>

        <div className="box-con-botones w-full">
          <form className="w-full">
            <div className="mb-4" style={{ display: "flex", width: "100%", flexDirection: "column", gap: "0.75em" }}>
              <label className="texto-normal-semibold" style={{ fontSize: "1.25em" }}>Dirección</label>
              <input 
                type="text" 
                className="texto-parrafo" 
                style={{ display: "flex", fontsize: em, borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                placeholder="Av. Villarroel Calle 8, Edificio 'Las Rosas', Piso 6, Nro.612" 
                name="userDireccion" />
            </div>
            {/*grid style seleccionar*/}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "2em", width: "100%" }}>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: "50%", gap: "1.75em" }}>
                <div style={{ display: "flex", width: "100%", flexDirection: "column", gap: "0.75em"}}>
                  <label className="texto-normal-semibold" style={{ fontSize: "1.25em"}}>Ciudad</label>
                  <input 
                    type="text" 
                    className="texto-parrafo" 
                    style={{ display: "flex", fontsize: em, borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                    placeholder="La Paz" 
                    name="userCiudad" />
                </div>

                <div style={{ display: "flex", width: "100%", flexDirection: "column", gap: "0.75em" }}>
                  <label className="texto-normal-semibold" style={{ fontSize: "1.25em" }}>Distrito</label>
                  <input 
                    type="text" 
                    className="texto-parrafo" 
                    style={{ display: "flex", fontsize: em, borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75sem", backgroundColor: 'var(--transicion-50)' }} 
                    placeholder="La Paz" 
                    name="userDistrito" />
                </div>


              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: "50%", gap: "1.75em" }}>

                <div style={{ display: "flex", width: "100%", flexDirection: "column", gap: "0.75em" }}>
                  <label className="texto-normal-semibold" style={{ fontSize: "1.25em" }}>Zona</label>
                  <input 
                    type="text" 
                    className="texto-parrafo" 
                    style={{ display: "flex", fontsize: em, borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                    placeholder="San Pedro" name="userZona" />
                </div>

                <div style={{ display: "flex", width: "100%", flexDirection: "column", gap: "0.75em" }}>
                  <label className="texto-normal-semibold" style={{ fontSize: "1.25em" }} >Teléfono</label>
                  <input 
                    type="text" 
                    className="texto-parrafo" 
                    style={{ display: "flex", fontsize: em, borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                    placeholder="7777777" 
                    name="userTelefono" />
                </div>
              </div>
            </div>
            <Link 
              href={"/qr"}
              className="boton-primario w-40 mx-auto mt-6"
              style={{ fontSize: "1.25em" }}
              >
              <input
                type="submit"
                value="Continuar" />
            </Link>
          </form>
        </div>
      </div>

    </div >
  )
};