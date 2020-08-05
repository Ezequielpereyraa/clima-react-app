import React, { useState } from 'react';
import Error from '../Error';
import PropTypes from 'prop-types';

const Formulario = ({ busqueda, setBusqueda, setConsulta }) => {
  const [error, setError] = useState(false);
  const { ciudad, pais } = busqueda;
  // Funcion que agrega los datos
  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  // cuando envie el form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.trim() === '' || pais.trim() === '') {
      //validamos para pasar el error
      setError(true);
      return;
    }
    //ocultamos el error
    setError(false);
    // pasamos los datos al componente principal
    setConsulta(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje='Todos los campos son obligatorios' /> : null}
      <div className='input-field  col s12'>
        <input
          type='text'
          name='ciudad'
          id='ciudad'
          value={ciudad}
          onChange={handleChange}
          className='white-text'
        />
        <label htmlFor='ciudad' className='white-text'>
          Ciudad
        </label>
      </div>
      <div className='input-field col s12'>
        <select name='pais' value={pais} onChange={handleChange}>
          <option value=''>--- Seleccione un Pais --</option>
          <option value='US'>Estados Unidos</option>
          <option value='MX'>México</option>
          <option value='AR'>Argentina</option>
          <option value='CO'>Colombia</option>
          <option value='CR'>Costa Rica</option>
          <option value='ES'>España</option>
          <option value='PE'>Perú</option>
        </select>
        <label htmlFor='pais' className='white-text'>
          Pais
        </label>
      </div>
      <div className='input-field col s12'>
        <input
          type='submit'
          value='Buscar clima'
          className='waves-effect waves-light btn-large btn-block yellow accent-4 white-text'
        />
      </div>
    </form>
  );
};
Formulario.propTypes = {
  busqueda: PropTypes.object.isRequired,
  setBusqueda: PropTypes.func.isRequired,
  setConsulta: PropTypes.func.isRequired,
};
export default Formulario;
