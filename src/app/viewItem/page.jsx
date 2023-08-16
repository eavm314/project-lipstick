import ViewItem from "./screen/view_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BotonProducto } from "../tienda/ComponentesTienda";

const dataPrueba = {
    imagen: "lipstickPrueba",
    categoria: "Labios",
    tags: ["lipstick", "especial"],
    nombre: "Ruby Lips",
    precio: "70.00",
    textoBoton: "Comprar"
}

export default function ItemPage() {
    const nums = [1,2,3,4,5]

    return (
        <div style={{ flex: 1, backgroundColor: "#f7f8f9" }}>
            <ViewItem></ViewItem>
            <div>
                <div style={{ display: "flex", alignItems: "center", alignContent: "center", padding: (64), justifyContent: "center" }}>
                    <div className="conjunto-productos">
                        {nums.map((num) => <BotonProducto imagen={dataPrueba.imagen} categoria={dataPrueba.categoria}
                            tags={dataPrueba.tags} nombre={dataPrueba.nombre} precio={dataPrueba.precio} textoBoton={dataPrueba.textoBoton} />)}
                    </div>
                </div>
            </div>
        </div>

    )
}