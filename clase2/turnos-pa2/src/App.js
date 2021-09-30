import { Component } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Turno from './components/Turno';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lista: [],
    }
  }

  agregarTurno = (turno) => {
    this.setState({
      lista: [...this.state.lista, turno]
    })
  }

  eliminarTurno = (id) => {
    const lista = this.state.lista.filter(turno => turno.id !== id)
    this.setState({
      lista: lista
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Administración de Pacientes</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario agregarTurno={this.agregarTurno} />
            </div>
            <div className="one-half column">
            <h2>Lista de turnos</h2>
              {
                this.state.lista.map((turno) => <Turno key={turno.id} turno={turno} eliminarTurno={this.eliminarTurno}/>)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
