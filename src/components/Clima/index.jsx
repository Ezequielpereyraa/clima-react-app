import React from 'react';
import PropTypes from 'prop-types';
const Clima = ({ clima }) => {
  //extraer valores
  const { main, name } = clima;
  if (!name) return null;
  const kelvin = 273.15;
  return (
    <div className='card-panel white col s12'>
      <div className='black-text'>
        <h2>El Clima en {name} es de</h2>
        <p className='temperatura'>
          {parseFloat(main.temp - kelvin).toFixed(2)} <span>&#x2103;</span>
        </p>
        <p>
          Temperatura Maxima:
          {parseFloat(main.temp_max - kelvin).toFixed(2)} <span>&#x2103;</span>
        </p>
        <p>
          Temperatura Minima:
          {parseFloat(main.temp_min - kelvin).toFixed(2)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};
Clima.propTypes = {
  clima: PropTypes.object.isRequired,
};
export default Clima;
