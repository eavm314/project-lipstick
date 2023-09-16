/**
 * @jest-environment jsdom
 */

import { render,fireEvent, screen } from "@testing-library/react"
import TiendaPage from "../tienda/page";
import { useProductContext} from "../tienda/layout";
import  RootLayout from "../layout";
import NavBarLayout from "../tienda/layout"
import { BotonProductoSinContext } from "../tienda/ComponentesTienda";

test ('Datos de producto aparecen correctamente',()=>{

    const product =  {
         id: 1,
         imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6DDP73pqXjOcpnHbhKnGJvKn7-rarl7WfDA&usqp=CAU",
         categoria: "Labios",
         tags: ["lipstick", "especial"],
         nombre: "Ruby Lips",
         nombreLargo: "Labial Sabor  Chocolate Humectante Antigrasa Esika Premium",
         precio: 70.00,
       }
   const { getByPlaceholderText, getByText, getByTestId} = render(<BotonProductoSinContext
     key={1}
     id={product.id}
     imagen={product.imagen}
     categoria={product.categoria}
     tags={product.tags}
     nombre={product.nombre}
     nombreLargo={product.nombreLargo}
     precio={product.precio}
     textoBoton={"Añadir"} />);
 
   const nombreInput = screen.getByText("Ruby Lips")
   const boton = screen.getByText("Añadir")
   const tags = screen.getByText(`${product.categoria}: ${product.tags.join(", ")}`)
 
   expect(nombreInput).toBeTruthy();
   expect(boton).toBeTruthy();
   expect(tags).toBeTruthy();
 })