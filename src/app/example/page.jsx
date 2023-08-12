"use client"
import { useState } from "react";
import { Component } from "./Component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";
import '../globals.css'


const ExamplePage = () => {
    const [cont, setCont] = useState(2);
    // let cont = 2;
    const nums = [1,2,3,4,5,6];
    const data = {
        nombre: "producto 1",
        precio: 21,
    }
    const em = 16;
    return(
        <div className="bg-emerald-800 md:bg-yellow-500">
            
            <h1 className="texto-precio-producto-pagina-individual">ExampleHola123456789</h1>
            
            {nums.filter((num)=> num%2==0).map((num) => <Component n={num} nombre={data.nombre}/>)}
            <button
                style={{fontSize: (em*1)}}
                className="boton-advertencia"
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

        </div>
    )
}

export default ExamplePage;