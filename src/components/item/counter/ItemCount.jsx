import React from 'react'
import s from "../Item.module.css"



export default function ItemCount({ add, dec, addToCart, cant }) {


  return (
    
    <div className={s.counterContainer}>
      <div className={s.addDecCant}>
          <button className={s.btnCounter} onClick={() => {dec()}}>-</button>
          <p className={s.showCant}>{cant}</p>
          <button className={s.btnCounter} onClick={() => {add()}}>+</button>
      </div>
      <button className={s.btnAddToCart} onClick={() => {addToCart()}}>Agregar al Carrito</button>
    </div>

  )
}
