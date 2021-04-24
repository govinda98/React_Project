import React from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import ExerciseList from './Exerciselist';
import Routine from './Routine';
import Signup from './Signup';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/list" component={ExerciseList}/>
          <Route path="/routine" component={Routine}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
