import React, { useContext, useEffect, useState } from 'react'

import '../styles/componentStyles/ProductsCartList.scss'

import ProductCard from './UI/ProductCard/ProductCard'
import { ItemContext } from '../context'

const ProductsCartList = () => {

    const {items, setItems} = useContext(ItemContext)

    const removeItem = (itm) => {
      setItems(items.filter(p => p.id !== itm.id))
    }

  return (
    <div className='productsCartList'>
        {items.length > 0
          ? items.map(item =>
            <ProductCard item={item} remove={removeItem} changeAmount={setItems}/>
          )
          : <a className='productsCartList-empty'>Ваша корзина пуста.</a>
        }
        {/* {useEffect(() => {
          if (items.length > 0) {
            items.map(item => {
              <ProductCard item={item} remove={removeItem} changeAmount={setItems}/>
            })
          } else {
            <a className='productsCartList-empty'>Ваша корзина пуста.</a>
          }
        }, [items])} */}
    </div>
  )
}

export default ProductsCartList
