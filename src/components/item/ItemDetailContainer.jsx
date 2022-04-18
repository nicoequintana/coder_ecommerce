import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {products} from '../Utils/products'
import {traerProducto} from '../Utils/customFetch'

export default function ItemDetailContainer() {

    const [producto, setProducto] = useState({})
    
    useEffect(()=>{
        traerProducto(2000, products)
        .then((res) => {
            setProducto(res.find(p => p.id===5))
        })
    }, [])

    return(

        <>
            <ItemDetail producto={producto} />
        </>

    )
}