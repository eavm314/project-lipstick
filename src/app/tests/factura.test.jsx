import { render, fireEvent, screen, act, waitFor } from "@testing-library/react"
import FacturacionM from "../factura/resources/facturacionM";

test('not null text', () => {
  render(<FacturacionM />);

  const telInput = screen.getByPlaceholderText('Ej. 69420666')

  const submitButton = screen.getByRole('button', { name: 'Continuar' })

  fireEvent.change(telInput, { target: { value: "12345678" } })
  fireEvent.click(submitButton)

  waitFor(() => {
    const warning = screen.getByText("*campo obligatorio")
    expect(warning).toBeTruthy();
  })

})