import React from 'react';

import './Css/App.css';
import { Switch, Route } from 'react-router-dom'
import Main from './Pages/index';
import Login from './Pages/Login'



function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path ="/" component={Main} />
      <Route path ="/login" component={Login}/>
    </Switch>
    </div>
  );
}

export default App;
