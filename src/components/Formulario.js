import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid'

const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota:'',
        propíetario:'',
        fecha:'',
        hora:'', 
        sintomas:''
    });

    const [error, actualizarError] = useState(false)

     const actualizarState = e =>{
        actualizarCita({
            ...cita, 
            [e.target.name] : e.target.value
        })
     }
const {mascota, propíetario, fecha, hora, sintomas} = cita

const submitCita= e =>{
    e.preventDefault();

    //validar 
    if(mascota.trim() === '' || propíetario.trim() === '' || fecha.trim() === '' ||hora.trim() === '' || sintomas.trim() === ''){
       actualizarError(true);
        return;
    }
    //eliminar el mensaje de error previo
    actualizarError(false);

    //asignar id
    cita.id = uuidv4();


    //crear la cita
    crearCita(cita);

    //reiniciar el formulario

    actualizarCita({
        mascota:'',
        propíetario:'',
        fecha:'',
        hora:'', 
        sintomas:''
    })


}

    return ( 
        <Fragment>
            <h2>crear cita</h2>

            { error ? <p className="alerta-error "> Todos los campos son obligatorios</p> :null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className ="u-full-width" 
                    placeholder="Nombre Mascota"                     
                    onChange={actualizarState}   
                    value = {mascota}           
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propíetario"
                    className ="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"                     
                    onChange={actualizarState} 
                    value = {propíetario}               
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className ="u-full-width"                     
                    onChange={actualizarState} 
                    value = {fecha}                              
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className ="u-full-width"                 
                    onChange={actualizarState}  
                    value = {hora}                              
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"                    
                    onChange={actualizarState}  
                    value = {sintomas} 
                > </textarea>

                <button
                type="submit"
                className="u-full-width button-primary"
                >
                Agregar Cita
                </button>
            </form>

        </Fragment>
        
     );
}
 
export default Formulario;