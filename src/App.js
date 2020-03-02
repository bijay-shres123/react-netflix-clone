import React from 'react';

import './Css/App.css';
import { Switch, Route } from 'react-router-dom'
import Main from './Pages/index';



function App() {
  return (
    <div className="App">
    <Switch>
      <Route path ="/" component={Main} / >
    </Switch>
    </div>
  );
}

export default App;
