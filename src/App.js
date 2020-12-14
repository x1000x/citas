import React, { Fragment, useState} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //arreglo de citas (arreglo prioncipal)
const [citas, guardarCitas] = useState([]);

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
        <h1>Administrador de Pacientes da fabian</h1>

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
