import "../globals.css"

export const Component = ({ n, nombre }) => {
  return (
    <div className="bg-blue-500">
      Component {n} {nombre}
    </div>
  )
}
