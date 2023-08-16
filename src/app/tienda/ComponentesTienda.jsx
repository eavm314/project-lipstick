import "../globals.css"
import './tienda.css'
const em = 16;

export const BotonProducto = ({ imagen, categoria, tags, nombre, precio, textoBoton }) => {
  return (
    <div className="boton-producto">
      <div className="imagen-producto-tienda">
        <img src={"/" + imagen + ".jpg"} alt="" />
      </div>

      <p className="texto-normal-semibold"
        style={{ fontSize: (em * 1), width: (9.75 * em) }}>
        {nombre}
      </p>

      <p className="texto-tags-producto-tienda"
        style={{ fontSize: (em * 0.75), width: (9.75 * em) }}>
        {categoria}: {tags.join(", ")}
      </p>

      <p className="texto-precio-producto-tienda"
        style={{ fontSize: (em * 1.5), width: (9.75 * em) }}>
        ${precio}
      </p>

      <button
        style={{ fontSize: (em * 1) }}
        className="boton-primario"
      //TODO: llevar a producto individual
      >
        {textoBoton}
      </button>
    </div>
  )
}