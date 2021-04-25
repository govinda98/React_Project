import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import ExerciseList from './Exerciselist';
import Routine from './Routine';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  
  return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/list" component={ExerciseList} />
            <Route exact path="/routine" component={Routine} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
