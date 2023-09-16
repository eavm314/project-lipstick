import '../qr/qr.css'
import '../globals.css'
import React from "react";
import PropTypes from 'prop-types';


const Dropdown = ({ label, value, options, onChange }) => {

    return (
   
        <div style={{ display: "flex", width: "100%", flexDirection: "column"}}>
      <label className="texto-normal font-medium flex flex-col gap-3.5" style={{ fontSize: "1.25em"}}>
   
        {label}
   
        <select className="texto-parrafo font-normal text-base"
            style={{ display: "flex", fontsize: "1em", borderWidth: 1, borderColor: '#000', width: "100%", padding: "1em", backgroundColor: 'var(--transicion-50)'}}  value={value} onChange={onChange}>
   
          {options.map((option, index) => (
   
            <option value={option.value} key={index}>{option.label}</option>
   
          ))}
   
        </select>
   
      </label>
      </div>
    );
   
   }


   
   Dropdown.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
  };

   export default Dropdown;