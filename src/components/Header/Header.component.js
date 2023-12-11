import React from 'react';
import Button from './Button/Button.component';
import './Header.css';

const Header = ({cartItems}) => {
  return (
    <div className='header'>
      <Button>logo</Button>
      <Button>korzina</Button>
    </div>
  )
}

export default Header