import '../qr/qr.css'
import '../globals.css'

const Dropdown = ({ label, value, options, onChange }) => {

    return (
   
        <div style={{ display: "flex", width: "100%", flexDirection: "column"}}>
      <label className="texto-normal flex flex-col gap-3.5" style={{ fontSize: "1.25em"}}>
   
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

   export default Dropdown;