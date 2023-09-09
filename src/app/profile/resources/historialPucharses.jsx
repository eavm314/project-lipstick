import React from "react";

const HistorialPucharses = (props) => {

  const purchasesHistorial = {
    code: props.code,
    pucharses: props.list
  }

  const total = purchasesHistorial.pucharses.reduce((totalAcc,priceItem)=> totalAcc+priceItem.precio,0)
  
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
        {
          purchasesHistorial.pucharses.map((item,index) => {
            return (
              <div style={{ minWidth: '32.75em', flexDirection: 'row', display: 'flex' }} key={index}>
                <div style={{ display: 'flex', flex: 3, paddingBottom: '0.75em', paddingTop: '0.75em', flexDirection: 'row' }}>
                  <h1
                    className="texto-parrafo"
                    style={{ fontSize: "1em", fontWeight: 'bold', marginLeft: 0, width: "100%" }}> {item.nameItem}
                  </h1>

                </div>

                <div style={{ display: 'flex', flex: 3, flexDirection: 'row-reverse', width: "50%", padding: '1em' }}>
                  <h1
                    className="texto-parrafo"
                    style={{ fontSize: "1.25em", width: '30%' }}> ${item.precio}
                  </h1>
                  <h1
                    className="texto-parrafo"
                    style={{ fontSize: "1.25em", fontWeight: 'bold', marginLeft: '1em', width: '50%' }}> {item.cant} U.
                  </h1>
                </div>
              </div>
            )
          })
        }
        <div style={{ width: '42.5625em', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center' }}>
          <h1
            className="texto-parrafo"
            style={{ fontSize: "1.5em", fontWeight: 'bold', marginLeft: '1em', width: '18%' }}> ${total}
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