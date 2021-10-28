import React from 'react'
import './App.css';
import 'bulma/css/bulma.css'
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import Error404 from './pages/Error404';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/peliculas/:id" component={MoviePage} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </Router>
  )
}

export default App;
