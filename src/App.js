import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

const App = () => {
  //State del formulario
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: '',
  });

  const { ciudad, pais } = busqueda;
  const [consulta, setConsulta] = useState(false);
  const [clima, setClima] = useState({});
  const [error, setError] = useState(false);

  /* Hoooks */

  useEffect(() => {
    const consultarApi = async () => {
      if (consulta) {
        const appId = 'f7ba301e3f95a68a5cb5c5890ba5f2d8';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        setClima(datos);
        // Detecta ciudad no correfcta
        if (datos.cod === '404') {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultarApi();
  }, [ciudad, pais, consulta]);
  //Carga condicional de los componentes
  let componente;
  if (error) {
    componente = <Error mensaje='No hay resultado' />;
  } else {
    componente = <Clima clima={clima} />;
  }
  return (
    <>
      <Header titulo='Clima React' />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsulta={setConsulta}
              />
            </div>
            <div className='col m6 s12'>{componente}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
