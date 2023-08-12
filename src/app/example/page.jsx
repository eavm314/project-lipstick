"use client"
import { useState } from "react";
import { Component } from "./Component";

const ExamplePage = () => {
    const [cont, setCont] = useState(2);
    // let cont = 2;
    const nums = [1,"dew",21];
    const data = {
        nombre: "producto 1",
        precio: 21,
    }
    return(
        <div className="bg-emerald-800 md:bg-yellow-500">
            <h1>Example</h1>
            { nums.filter((num)=> num%2==0).map((num) => <Component n={num} nombre={data.nombre}/>)}
            <button
                onClick={()=>{setCont(cont+1)}}
                // onClick={()=>{cont++}}
            >
                Boton {cont}
            </button>

        </div>
    )
}

export default ExamplePage;