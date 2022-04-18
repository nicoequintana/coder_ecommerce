import React from 'react';
import s from '../item/Item.module.css'
import ItemCount from './counter/ItemCount';
import ItemCountContainer from './counter/ItemCountContainer';

export default function ItemDetail({producto}) {


    return(
        <div className={s.itemDetailContainer}>
            <div className={s.imgDetail} >
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className={s.textDetail}>
                <h2>{producto.nombre}</h2>
                <h3>{producto.precio}</h3> 
            </div>
        </div>
    )
}