"use client"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";
import '../globals.css'

//implementar font awesome icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export default function TiendaLayout({ children }){
  return (
      <div>
            <div className="navigation-bar">
                <p className="texto-navigation-bar">Todos</p>
                <p className="texto-navigation-bar">Ojos</p>
                <p className="texto-navigation-bar">Cabello</p>
                <p className="texto-navigation-bar">Uñas</p>
            </div>
      {children}
      </div>
  );
}