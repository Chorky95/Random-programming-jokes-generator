import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PunchLine from './components/PunchLine';
import Home from './components/Home';
import About from './components/About';
import './main.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <h1 className='title'>Random programming jokes generator</h1>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/punchline'>
            <PunchLine />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
