import React from 'react'
import { BrowserRouter as Routerition, Route, Switch } from 'react-router-dom'
import Acerca from '../pages/Acerca'
import Contacto from '../pages/Contacto'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Listado from '../pages/Listado'
import Perfil from '../pages/Perfil'
import Productos from '../pages/Productos'
import Servicios from '../pages/Servicios'
import Navegacion from './Navegacion'

const Router = () => {
    return (
        <div>
            <h2>Ruteador</h2>
            <Routerition>
                <Navegacion />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/productos?srcImg" component={Productos} />
                    <Route path="/acerca" component={Acerca} />
                    <Route path="/servicios" component={Servicios} />
                    <Route exact path="/perfil/:userName/:age" component={Perfil} />
                    <Route path="/contacto" component={Contacto} />
                    <Route path="/listado" component={Listado} />
                    <Route path="*" component={Error404} />
                </Switch>
            </Routerition>
        </div>
    )
}

export default Router
