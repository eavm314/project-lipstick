"use client"
import '../globals.css'
//implementar font awesome icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { createContext, useContext, useState } from 'react';
import {BsBag} from "react-icons/bs";
import {FaRegHeart} from "react-icons/fa";
import { IconContext } from 'react-icons';
import Link from "next/link";

config.autoAddCss = false;

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

const categorias = ["Todos", "Skin Care", "Labios", "Cabello", "Ojos", "Accesorios", "Piel"];
const filtrosLabios = [" "]

export default function NavBarLayout({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedFilter, setSelectedFilter] = useState();
  return (
    <div>
      <div className="navigation-bar">
        <Link href={"/"}
        //TODO: LLEVAR A PAGINA DE INICIO
        >
          <p className={"texto-navigation-bar"}>Inicio</p>
        </Link>
        {
          categorias.map((categoria, index) =>
            <p
              key={index}
              className={"texto-navigation-bar"+ (categoria===selectedCategory? " underline":"")}
              tabIndex={index}
              onClick={() => setSelectedCategory(categoria)}>
              {categoria}
            </p>
          )
        }
      </div>
      <div className="flex flex-initial flex-nowrap w-full h-max py-3.5 px-9" style={{backgroundColor:"var(--transicion-700)"}}>
        <div className="filter-bar">
          {
            filtrosLabios.map((filtro, index) =>
              <p
                key={index}
                className={"texto-filter-bar"+(filtro===selectedFilter? " underline":"")}
                tabIndex={index}
                onClick={() => setSelectedFilter(filtro)}>
                {filtro}
              </p>
            )
          }
        </div>
        <div style={{width:"16.67%", display:"flex"}}>
          <IconContext.Provider value={{ className: 'icons-filter-bar' }}>
          <Link href={"/bolsaCompras/1"} key={0}><BsBag/></Link>
          </IconContext.Provider>
        </div>
      </div>
      <ProductContext.Provider value={{ selectedCategory}}>
        {children}
      </ProductContext.Provider>
    </div>
  )
}
