"use client"
import { useState } from "react";
import { Component } from "./Component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";
import '../globals.css'
import BoxIndividual from "../bolsaCompras/resources/BoxIndividual";




const ExamplePage = () => {
    const [cont, setCont] = useState(2);
    const [cantidad, setCantidad] = useState(1);
    // let cont = 2;
    const nums = [1,2,3,4,5,6,7,8];
    const data = {
        nombre: "producto 1",
        precio: 21,
    }

    const dataPrueba = {
        imagen: "lipstickPrueba.jpg",
        categoria: "Labios",
        tags: ["lipstick", "especial"],
        nombre: "Ruby Lips",
        nombreLargo: "Labial Sabor  Chocolate Humectante Antigrasa Esika Premium",
        precio: 70.00,
        textoBoton: "Añadir"
      }
    const em = 16;

    
    return(
        <div className="bg-emerald-800">
            
            {nums.filter((num)=> num%2==0).map((num, index) => <Component n={num} nombre={data.nombre} key={index}/>)}
            <button
                style={{fontSize: (em*1)}}
                className="boton-producto"
                onClick={()=>{setCont(cont+1)}}
                // onClick={()=>{cont++}}
            >
                BotonHola {cont}
            </button>
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{color: "#d6d6d6",}}
                />
                <FontAwesomeIcon
                    icon={faCircleStop}
                />

            <div style={{ display: "flex", width: "100%", flexDirection: "column", gap: "0.75em"}}>
                  <label className="texto-normal" style={{ fontSize: "1.25em"}}>Ciudad</label>
                  <input 
                    type="text" 
                    className="texto-parrafo" 
                    style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "0.75em", backgroundColor: 'var(--transicion-50)' }} 
                    placeholder="La Paz" 
                    name="userCiudad" />
                </div>
                <div>



<p>We eat {value}!</p>

</div>

        </div>
    )
}

export default ExamplePage;