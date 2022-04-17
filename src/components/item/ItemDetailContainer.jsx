import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {product} from '../Utils/products'
import {traerProducto} from '../Utils/customFetch'

export default function ItemDetailContainer() {

    const [producto, setProducto] = useState({})
    
    useEffect(()=>{
        traerProducto(6000, product)
        .then((res) => {
            setProducto(res)
        })
    }, [])

    return(

        <>
            <ItemDetail {...producto} />
        </>

    )
}