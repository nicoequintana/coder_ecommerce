import React from 'react'
import Item from './Item'

export default function ItemList( { items } ) {


  return (
    
    items.map(p => (
        <Item 
            key={p.id}
            nombre={p.nombre}
            precio={p.precio}
            imagen={p.imagen}
        />
    ))
        
  )
}

