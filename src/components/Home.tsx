import React from 'react';
import { Link } from "react-router-dom";

import '../App.css';

const App = () => {
  return (
    <div className='container'>
      <div className='home-container'>
        <p className='header-title'>Welcome to the Trivia Challenge!</p>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100%?</p>
        <Link to={`/quiz`} className='start-link'>BEGIN</Link>
      </div>
    </div>
  );
};

export default App;
