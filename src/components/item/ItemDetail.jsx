import React from 'react';
import s from '../item/Item.module.css'
import ItemCount from './counter/ItemCount';
import ItemCountContainer from './counter/ItemCountContainer';

export default function ItemDetail({id, nombre, precio, imagen}) {


    return(
        <div className={s.itemDetailContainer}>
            <div className={s.imgDetail} >
                <img src={imagen} alt={nombre} />
            </div>
            <div className={s.textDetail}>
                <h2>{nombre}</h2>
                <h3>{precio}</h3> 
            </div>
        </div>
    )
}