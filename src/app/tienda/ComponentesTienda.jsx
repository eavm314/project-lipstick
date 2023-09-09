import "../globals.css"
import './tienda.css'
import { IconContext } from 'react-icons';
import {BsBagPlus} from "react-icons/bs";
import Link from "next/link";
import { useBolsaComprasContext } from "../layout";
const em = 16;

export const BotonProducto = ({ id,imagen, categoria, tags, nombre, nombreLargo, precio, textoBoton }) => {

  const {listaBolsaCompras, setListaBolsaCompras} = useBolsaComprasContext()

  const addProduct = () =>{
    const product = {
      id: id,
      imagen: imagen,
      nombre: nombre,
      nombreLargo:nombreLargo,
      precio: precio
    }
    if(listaBolsaCompras.filter((producto) => producto.id === product.id).length===0){
      const newList = [...listaBolsaCompras, product]
      setListaBolsaCompras(newList)
    }
  }

  return (
    <div className="boton-producto">
      <Link href={"/viewItem/"+id} key={id}>
      <div className="imagen-producto-tienda">
        <img 
        className="w-full h-full"
          src={imagen} 
          alt={nombre} />
      </div>
      </Link>

      <p className="texto-normal"
        style={{ fontSize: "1em", width: "9.75em" }}>
        {nombre}
      </p>

      <p className="texto-tags-producto-tienda"
        style={{ fontSize: "0.75em", width: "9.75rem" }}>
        {categoria}: {tags.join(", ")}
      </p>

      <p className="texto-precio-producto-tienda"
        style={{ fontSize: "1.5em", width: "9.75rem" }}>
        ${precio.toFixed(2)}
      </p>

      <button
        style={{ fontSize: "1em" }}
        className="boton-primario" onClick={addProduct}
      >
        {textoBoton}
            <BsBagPlus/>
      </button>
    </div>
  )
}