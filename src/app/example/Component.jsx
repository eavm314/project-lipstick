import "../globals.css"
import React from 'react';
import PropTypes from 'prop-types';

export const Component = ({ n, nombre }) => {
  return (
    <div className="bg-blue-500">
      Component {n} {nombre}
    </div>
  )
}

Component.propTypes = {
  n: PropTypes.number.isRequired, // 'n' debe ser un número y es obligatorio.
  nombre: PropTypes.string.isRequired, // 'nombre' debe ser una cadena y es obligatorio.
};