import React, { useState } from 'react'
import ItemCount from '../counter/ItemCount'




export default function ItemCountContainer() {

    const stock = 10
    const [cant,setCant] = useState(1)

    //funcion con logica para sumar productos hasta stock disponible (stock)
    function add () {
        if (cant < stock) {
            setCant(cant + 1)
        } else {
            alert('Maximo de unidades por compra alcanzado')
        }
    }

    //funcion con logica para restar productos hasta unidad minima
    function dec () {
        if (cant > 1) {
            setCant(cant - 1)
        } else {
            alert ('Minimo de unidades alcanzado')
        }
    }

    function addToCart () {
        alert(`${cant} unidades fueron agregadas al carrito`)
    }


  return (
    <>
        <ItemCount add={add} dec={dec} addToCart={addToCart} cant={cant} />
    </>
  )
}
