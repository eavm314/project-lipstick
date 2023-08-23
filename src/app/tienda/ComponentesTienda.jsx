import "../globals.css"
import './tienda.css'
import { IconContext } from 'react-icons';
import {BsBagPlus} from "react-icons/bs";
import Link from "next/link";
const em = 16;

export const BotonProducto = ({ key,id,imagen, categoria, tags, nombre, precio, textoBoton }) => {
  return (
    <div className="boton-producto">
      <Link href={"/viewItem/"+id} key={key}>
      <div className="imagen-producto-tienda">
        <img 
        className="w-full h-full"
          src={imagen} 
          alt={nombre} />
      </div>
      </Link>

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
        ${precio.toFixed(2)}
      </p>

      <button
        style={{ fontSize: (em * 1) }}
        className="boton-primario"
      //TODO: llevar a producto individual
      >
        {textoBoton}
        <IconContext.Provider value={{ className: 'icon-boton-producto' }}>
            <BsBagPlus/>
          </IconContext.Provider>
      </button>
    </div>
  )
}