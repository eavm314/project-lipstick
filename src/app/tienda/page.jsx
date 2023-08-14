"use client"
import { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop
} from "@fortawesome/free-solid-svg-icons";
import '../globals.css'
import TiendaLayout from "./tiendalayout";
import RootLayout from "../layout";

const TiendaPage = () => {
    return (
        <div>
            BotonHola
        </div>
    )
}

TiendaPage.getLayout = (page) =>{
    return <TiendaLayout>{page}</TiendaLayout>
}


export default TiendaPage;