import React from 'react';
import CartIcon from './cart-icon.png';
import s from '../navbar/CartIcon.module.css'



export default function CartWidget() {


  return (

    <img className={s.cartIcon} src={CartIcon} />
 
  )
}
