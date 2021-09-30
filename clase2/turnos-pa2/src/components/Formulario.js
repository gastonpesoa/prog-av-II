import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'

class Formulario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            turno: {
                nombre: "",
                prepaga: "",
                fecha: "",
                hora: "",
                sintomas: ""
            },
            error: false
        }
    }
    handleChange = (e) => {
        this.setState({
            turno: {
                ...this.state.turno,
                [e.target.name]: e.target.value
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { nombre, prepaga, fecha, hora, sintomas } = this.state.turno;
        if (
            nombre.trim() === ""  ||
            prepaga.trim() === "" ||
            fecha.trim() === ""   ||
            hora.trim() === ""    ||
            sintomas.trim() === ""
        ) {
            console.log("Error");
            this.setState({
                error: true
            })
            return;
        }
        this.setState({
            error: false
        })
        const turno = this.state.turno;
        turno.id = uuidv4();
        //console.log(turno)

        this.props.agregarTurno(turno);
        console.log("Enviando...")

        this.setState({
            turno: {
                nombre: "",
                prepaga: "",
                fecha: "",
                hora: "",
                sintomas: ""
            }
        })
    }
    render() {
        const { nombre, prepaga, fecha, hora, sintomas } = this.state.turno;
        return <>
            <h2>Alta turno</h2>
            
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="txtNombre">Nombre:</label>
                <input
                    id="txtNombre"
                    type="text"
                    name="nombre"
                    placeholder="Ingrese nombre: "
                    className="u-full-width"
                    onChange={this.handleChange}
                    value={nombre}
                    />
                <label htmlFor="txtPrepaga">Prepaga:</label>
                <input
                    id="txtPrepaga"
                    type="text"
                    name="prepaga"
                    placeholder="Ingrese prepaga: "
                    className="u-full-width"
                    onChange={this.handleChange}
                    value={prepaga}
                    />
                <label htmlFor="txtFecha">Fecha:</label>
                <input
                    id="txtFecha"
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={this.handleChange}
                    value={fecha}
                    />
                <label htmlFor="txtHora">Hora:</label>
                <input
                    id="txtHora"
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={this.handleChange}
                    value={hora}
                    />
                <label htmlFor="txtSintomas">Sintomas:</label>
                <textarea
                    id="txtSintomas"
                    name="sintomas"
                    className="u-full-width"
                    onChange={this.handleChange}
                    value={sintomas}
                    />
                {
                    this.state.error 
                    ?  <p className="alerta-error">
                                Todos los campos son requeridos
                            </p>
                        : null
                }
                <button
                    type="submit"
                    className="button-primary u-full-width"
                >Alta Turno</button>
            </form>
        </>
    }
}

export default Formulario;