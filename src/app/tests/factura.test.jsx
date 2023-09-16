/**
 * @jest-environment jsdom
 */

// import { render,fireEvent } from "@testing-library/react"
// import Facturacion from "../factura/resources/finalVer";

// test ('not null text',()=>{
//   const { getByPlaceholderText, getByText, getByTestId} = render(<Facturacion />);

//   const nombreInput = getByPlaceholderText('Ej. Andres Diego Morales Espinoza')
//   const telInput = getByPlaceholderText('Ej. 69420666')
//   const dirInput = getByPlaceholderText('Ej. Alto seguencoma, 1ra meseta, C.10, Nro. 6')
//   const nitInput = getByPlaceholderText('Ej. 6733784')
//   const razSocInput = getByPlaceholderText('Ej. Juan Perez de la Riva')
//   const submitButton = getByPlaceholderText('Continuar')

//   fireEvent.change(telInput,{target:{value:"12345678"}})
//   fireEvent.change(dirInput,{target:{value:"Alto obrajes, Calle 15"}})
//   fireEvent.change(nitInput,{target:{value:"12345678"}})
//   fireEvent.change(razSocInput,{target:{value:"Tejada"}})
//   fireEvent.click(submitButton)

//   expect(getByText('*campo obligatorio')).toBeInTheDocument();

// })