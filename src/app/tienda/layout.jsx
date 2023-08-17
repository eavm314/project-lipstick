"use client"
import '../globals.css'
//implementar font awesome icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { createContext, useContext, useState } from 'react';

config.autoAddCss = false;

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

const categorias = ["Todos", "Ojos", "Labios", "Uñas"];

export default function NavBarLayout({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  return (
    <div>
      <div className="navigation-bar">
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
      <ProductContext.Provider value={{ selectedCategory }}>
        {children}
      </ProductContext.Provider>
    </div>
  )
}
