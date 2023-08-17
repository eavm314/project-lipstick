import ViewItem from "./screen/ViewItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BotonProducto } from "../tienda/ComponentesTienda";
import { faAngleLeft, faAngleRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const dataPrueba = {
  imagen: "lipstickPrueba",
  categoria: "Labios",
  tags: ["lipstick", "especial"],
  nombre: "Ruby Lips",
  precio: "70.00",
  textoBoton: "Comprar"
}

export default function ItemPage() {
  const nums = [1, 2, 3, 4, 5];
  const em = 16;

  return (
    <div style={{ flex: 1, backgroundColor: "var(--primary-100)", display:"flex", flexDirection: "column", justifyContent: "center", alignItems: 'center', padding: 4*em, gap: 2.5*em}}>
      <ViewItem />
      <div>
          <div className="conjunto-productos">
            {nums.map((num, index) => <BotonProducto key={index} imagen={dataPrueba.imagen} categoria={dataPrueba.categoria}
              tags={dataPrueba.tags} nombre={dataPrueba.nombre} precio={dataPrueba.precio} textoBoton={dataPrueba.textoBoton} />)}
          </div>
      </div>
    </div>

  )
}