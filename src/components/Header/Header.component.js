import React from 'react';
import logo from '../../static/images/logo.png';
import cart from '../../static/images/ic_cart.svg';
import './Header.css';

const Header = ({cartItems}) => {
  return (
    <div className='header'>
      <img className='cart-logo' src={logo} alt="logo" />
      <div className='cart-container'>
        <img className='cart-img' src={cart} alt="cart" />
        {cartItems.length !== 0 && <div className='cart-count'>
          { cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0) }
        </div>}
      </div>
    </div>
  )
}

export default Header