import React from 'react'
import s from '../item/Item.module.css'
import ItemCountContainer from './counter/ItemCountContainer'




export default function Item( { id, nombre, precio, imagen } ) {


  return (
    <>  
    
        <div key={id} className={s.cardProduct}>
            <div className={s.cardImgContainer}>
                <img className={s.cardImg} src={imagen} />
            </div>
            <div className={s.cardInfo}>
                <p className={s.cardName}>{nombre}</p>
                <p className={s.cardPrice}>{precio}</p>
            </div>
            <ItemCountContainer />
        </div>
          
    </>
  )
}
