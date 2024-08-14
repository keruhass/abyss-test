import React, { useContext, useState } from 'react'

import '../styles/componentStyles/ProductDescription.scss'
import '../styles/generalStyles/fonts.scss'

import { ItemContext } from '../context'

import ProductCard from './UI/ProductCard/ProductCard'
import SizeSwitch from './UI/SizeSwitch/SizeSwitch'
import StandartButton from './UI/StandartButton/StandartButton'

const ProductDescription = () => {

  const {items, setItems} = useContext(ItemContext)

  const addNewItem = (newItem) => {
    setItems([...items, newItem])
  }


  return (
    <div className='content'>

      <div className='content-heading'>
        <a>"maybe it is ok" t-shirt</a>
      </div>

        <div className='content-description'>
          <a>see the big picture.</a>
          <a>don't let small details ruin your mood, day, life.</a>
        </div>

        <div className='content-price'>
          <a>1500 руб</a>
        </div>

        <div className='content-sizetable'>
          <a>размер</a>
          <u>таблица размеров</u>
        </div>

        <SizeSwitch create={addNewItem}/>

        <div className='content-description'>
          <a>Состав: 100% хлопок, кулирная гладь</a>
        </div>

        <div className='content-description'>
          <a>Плотность: 190 г.</a>
        </div>
    </div>
  )
}

export default ProductDescription
