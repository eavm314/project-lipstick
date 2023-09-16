import React, { useEffect } from "react";
import "../../globals.css"
import '../../tienda/tienda.css'
import './bolsaCompras.css'
import '../../tienda/tienda.css'
import '../../viewItem/resources/paginaIndividual.css'
import {FaPlus, FaMinus} from "react-icons/fa";
import PropTypes from "prop-types";

const em = 16;

const BoxCantidad = (props) =>{
    const {productId, cantidad, setCantidadProducto, cantidadView, setCantidadView} = props;
    const aumentar = () =>{
        if(cantidadView<50){
            setCantidadView(cantidadView+1)
            setCantidadProducto(productId,cantidadView+1)
        }
    }
    const disminuir = () =>{
        if(cantidadView>1){
            setCantidadView(cantidadView-1)
            setCantidadProducto(productId,cantidadView-1)
        }
    }

    useEffect(() => {
        setCantidadView(cantidad);
    },[cantidad]);

    return(
        <div className={"box-cantidad"}>
                <FaMinus className="icon-bolsa-compras" style={{fontSize:(1.5*em)}} onClick={disminuir} id="less"/>
                <div className={"texto-normal"+" font-normal"} style={{fontSize:(1.25*em), lineHeight:(0.5*em), textAlign:"center"}}>{cantidadView}</div>
                <FaPlus className="icon-bolsa-compras" style={{fontSize:(1.5*em)}} onClick={aumentar} id="more"/>
        </div>
    );

}

BoxCantidad.propTypes = {
    productId: PropTypes.any.isRequired,
    cantidad: PropTypes.number.isRequired,
    setCantidadProducto: PropTypes.func.isRequired,
    cantidadView: PropTypes.number.isRequired,
    setCantidadView: PropTypes.func.isRequired,
  };

export default BoxCantidad;