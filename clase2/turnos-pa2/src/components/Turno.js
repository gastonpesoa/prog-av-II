import { React } from 'react';

const Turno = ({turno, eliminarTurno}) => {
    const { id, nombre, prepaga, fecha, hora, sintomas } = turno;
    return (<div className="turno">
       <p>Nombre: <span>{nombre}</span></p>     
       <p>Prepaga: <span>{prepaga}</span></p>     
       <p>Fecha: <span>{fecha}</span></p>     
       <p>Hora: <span>{hora}</span></p>     
       <p>Sintomas:<span>{sintomas}</span></p>
       <button onClick={()=>eliminarTurno(id)} className="u-full-width button eliminar">Eliminar</button>
    </div>)
}

export default Turno;