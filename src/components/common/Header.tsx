import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <div className='nav-container'>
      <ul className='link-list'>
        <li
          key="home"
          className={currentUrl === '/' ? 'active' : ''}
        >
          <Link to={'/'}>Home</Link>
        </li>
        <li
          key="quiz"
          className={currentUrl.includes('quiz') ? 'active' : ''}
        >
          <Link to={'/quiz'}>Quiz</Link>
        </li>
        {currentUrl.includes('result') && 
          <li key="result" className={currentUrl.includes('result') ? 'active' : ''}>Result</li>
        }
      </ul>
    </div>
  )
};

export default Header;
