import React from 'react';
import HeaderImg from '../assets/investment-calculator-logo.png';

const Header = () => {
  return (
    <div id='header'>
        <img  src={ HeaderImg} alt='Header IMG'/>
        <h1>React Investment Calculator</h1>
    </div>
  )
}

export default Header
