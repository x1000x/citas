import React, { Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //citas en local storage

let citasIniciales = JSON.parse(localStorage.getItem('citas'));
if (!citasIniciales){
  citasIniciales=[];
}

  //arreglo de citas (arreglo prioncipal)
const [citas, guardarCitas] = useState(citasIniciales);

//useEffect
useEffect( () => {
  if (citasIniciales){
    localStorage.setItem('citas', JSON.stringify(citas));
  } else{
    localStorage.setItem('citas', JSON.stringify([]) );
  }
}, [citas] );

// funcion citas actuales mas nuevas
const crearCita = cita =>{
guardarCitas([...citas, cita])
}

//elimina citas
const eliminarCita = id =>{
  const nuevasCitas = citas.filter(cita =>cita.id !== id)
  guardarCitas(nuevasCitas);
}
 const titulo = citas.length === 0 ? 'No hay Citas'   : 'Administra tus citas'
  return (
    <Fragment>
        <h1>Administrador de Pacientes </h1>

        <div className = "container">
          <div className = " row">
            <div className = "one-half column">
              <Formulario
              crearCita={crearCita}
              />
            </div>
            <div className = "one-half column">
              <h2>{titulo}</h2>
            {citas.map(cita =>
              <Cita
              key ={cita.id}
              cita ={cita}
              eliminarCita = {eliminarCita}
              />
              )}
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
