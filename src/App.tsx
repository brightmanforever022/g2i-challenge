import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Quiz from './components/Quiz/Index';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/quiz" exact component={Quiz} />
    </Router>
  );
};

export default App;
