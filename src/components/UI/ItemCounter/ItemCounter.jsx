import React, { useContext, useEffect, useState } from 'react'

import cl from './ItemCounter.module.scss'

import { ItemContext } from '../../../context'

const ItemCounter = ({id, amount}) => {

  const {items, setItems} = useContext(ItemContext)

  const increment = () => {
    const tempAarray = items.map((element) => element) 
    tempAarray.map((item => {
      if (item.id === id) {
        if (item.amount < 9) {
          item.amount = item.amount + 1
        }
      }
    setItems(tempAarray)
    // console.log(items)
    }))
  }

  const decrement = () => {
    const tempAarray = items.map((element) => element) 
    tempAarray.map((item => {
      if (item.id === id) {
        if (item.amount > 1) {
          item.amount = item.amount - 1
        }
      }
    setItems(tempAarray)
    // console.log(items)
    }))
  }

  return (
    <div className={cl.content}>
      <button onClick={decrement}><a>-</a></button>
      <a>{amount}</a>
      <button onClick={increment}><a>+</a></button>
    </div>
  )
}

export default ItemCounter
