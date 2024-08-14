import React, { useContext, useState } from 'react'

import '../styles/pageStyles/CartPage.scss'

import ProductCard from '../components/UI/ProductCard/ProductCard'
import CheckOutButton from '../components/UI/CheckOutButton/CheckOutButton';
import ProductsCartList from '../components/ProductsCartList';

import { itemsCounterHandler } from '../CartHandler';

import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import {RemoveScroll} from 'react-remove-scroll';

import exit from '../media/images/Icons/exit-icon.svg'

import { ItemContext } from '../context'

const CartPage = () => {

  const {items, setItems} = useContext(ItemContext)

  const navigate = useNavigate()

  const switchRender = (param) => {

    const number = param % 10

    if (param >= 10 && param <= 20) {
      return `вещей в корзине`
    }

    switch (number) {
      case 0:
        return `вещей в корзине`
      case 1:
        return `вещь в корзине`
      case 2:
        return `вещи в корзине`
      case 3:
        return `вещи в корзине`
      case 4:
        return `вещи в корзине`
      case 5:
        return `вещей в корзине`
      case 6:
        return `вещей в корзине`
      case 7:
        return `вещей в корзине`
      case 8:
        return `вещей в корзине`
      case 9:
        return `вещей в корзине`
    }
  }

  return (
    <div className='cart-content'>
      <div className='cart-content-navigation'>
        <a>{itemsCounterHandler(items)} {switchRender(itemsCounterHandler(items))}</a>
        <Link className='exit' to="/product"><img src={exit}/></Link>
      </div>
      <ProductsCartList/>
      {items.length > 0 &&
        <div className='cart-content-totalPriceСounter'>
          <a>Итого:</a>
          <a>{itemsCounterHandler(items)*1500} руб</a>
        </div>
      }
      <CheckOutButton disabled={items.length < 1} onClick={() => navigate('/payment')}/>
    </div>
  )
}

export default CartPage
