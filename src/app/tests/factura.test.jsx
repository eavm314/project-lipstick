/**
 * @jest-environment jsdom
 */

import { render,fireEvent,screen } from "@testing-library/react"
import FacturacionM from "../factura/resources/facturacionM";

test ('not null text',()=>{
  const { getByPlaceholderText, getByText,getByTestId} = render(<FacturacionM />);

  //const nombreInput = getByPlaceholderText('Ej. Andres Diego Morales Espinoza')
  const telInput = getByTestId('telefono-input')
  const dirInput = getByTestId('direccion-input')
  const nitInput = getByTestId('nit-input')
  const razSocInput = getByTestId('razonSocial-input')
  const submitButton = screen.getByRole('button',{name:'Continuar'})

  fireEvent.change(telInput,{target:{value:"12345678"}})
  fireEvent.change(dirInput,{target:{value:"Alto obrajes, Calle 15"}})
  fireEvent.change(nitInput,{target:{value:"12345678"}})
  fireEvent.change(razSocInput,{target:{value:"Tejada"}})
  fireEvent.click(submitButton)

  const warning = screen.getByRole('article',{name:'no_null'})

  expect(warning).toBeInTheDocument();

})