import React, { useEffect, useState } from 'react'
import s from '../item/Item.module.css'
import {customFetch} from '../Utils/customFetch'
import {products} from '../Utils/products'
import ItemList from './ItemList'


export default function ItemListContainer() {
  const [items, setItems] = useState([])

  useEffect(() => {
    customFetch(3000, products)
    .then(resultado => setItems(resultado))
    .catch(error => console.log(error))
  }, [items])

  return (
    
    <div className={s.itemListContainer}>
      <ItemList items={items} />
    </div>

  )
}

