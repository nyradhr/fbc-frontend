import {useState} from 'react';

export function Dropdown() {
    const options = [
        { label: 'Curva', value: 'STAND' },
        { label: 'Tribuna', value: 'GALLERY' }
    ];
    const [value, setValue] = useState({}); //controllare se funziona
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const Dropdown = ({ label, value, options, onChange }) => {
        return (
          <label>
            {label}
            <select value={value} onChange={onChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        );
      };
    return (
        <div>
        <Dropdown
          label="Tipologia biglietto"
          options={options}
          value={value}
          onChange={handleChange}
        />
        <p>Tipologia selezionata: {value} </p>
      </div>
    );
};

export default Dropdown;