import React from "react";

const HistorialPucharses = (props) => {

  const purchasesHistorial = {
    code: props.code,
    total: props.total,
    productos: props.productos
  }
  //console.log(purchasesHistorial);

  //const total = purchasesHistorial.pucharses.reduce((totalAcc,priceItem)=> totalAcc+priceItem.precio,0)
  
  return (
    <div style={{ width: '42.5625em', margin: '1.5em', marginTop: '1em', borderBottomWidth: 1, borderBottomColor: '#000' }}>
      <div style={{ paddingTop: '1em', paddingLeft: '1.375em' }}>
        <div className="texto-parrafo" style={{ fontSize: "1em" }}>Código de compra:
          <h1
            className="texto-parrafo"
            style={{ fontSize: "1em", fontWeight: 'bold', marginLeft: 2.5 }}> #{purchasesHistorial.code}</h1>
        </div>
      </div>

      <div style={{ width: "100%", margin: '4.25em', marginTop: '1.375em', marginBottom: '1.375em', display: 'flex', flexDirection: 'column', marginLeft: '2em' }}>
        
              <div className="items-center justify-center w-full flex flex-col gap-5" style={{borderBottomWidth: 1, borderColor: '#000', paddingBottom:"1.75em"}}>
                {purchasesHistorial.productos.map(paquete => 
                    <div className="flex flex-row w-full items-center gap-2" style={{padding:"0 3.5em 0 0"}}>
                        <div className="flex texto-normal font-normal text-left w-2/4 justify-start" style={{fontSize:"1em"}}>
                            {paquete.producto.nombreLargo}
                        </div>
                        <div className="flex texto-normal font-normal text-right w-1/4 justify-end" style={{fontSize:"1.25em"}}>
                            {paquete.cantidad}u
                        </div>
                        <div className="flex texto-normal font-normal text-right w-1/4 justify-end" style={{fontSize:"1em"}}>
                            ${paquete.producto.precio*paquete.cantidad}
                        </div>
                    </div>
                    )}
                </div>

        <div style={{ width: '42.5625em', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
          <h1
            className="texto-parrafo"
            style={{ fontSize: "1.5em", fontWeight: 'bold', marginLeft: '1em', width: '18%' }}> ${purchasesHistorial.total}
          </h1>
          <h1
            className="texto-parrafo"
            style={{ fontSize: "1.75em", fontWeight: 'bold', marginLeft: '1em', width: '21%' }}> Total:
          </h1>
        </div>
      
      </div>
    </div>
  )
}

export default HistorialPucharses