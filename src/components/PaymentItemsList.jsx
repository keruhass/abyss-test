import React from 'react'
import { useContext } from 'react'
import { ItemContext } from '../context'

import '../styles/componentStyles/PaymentItemsList.scss'

import img from '../media/images/ProductShortImg/product.svg'
import ProductCard from './UI/ProductCard/ProductCard'

import { itemsCounterHandler } from '../CartHandler';

const PaymentItemsList = () => {

    const {items, setItems} = useContext(ItemContext)

  return (
    <div className='paymentItemsList'>
      {items.map(item =>
        <div className='paymentItemsListItem'>
            <img src={img}/>
            <a>“maybe it <i>is</i> okay” t-shirt</a>
            <a style={{marginLeft: '130px'}}>{item.amount}x</a>
            <a>{item.amount*1500} руб</a>
        </div>
      )}
      <div  className='paymentItemsListResult'>
        <div>
            <a>Доставка</a>
            <a>701р</a>
        </div>
        <div>
            <span>Итог</span>
            <span>{itemsCounterHandler(items)*1500+701} руб</span>
        </div>
      </div>
    </div>
  )
}

export default PaymentItemsList
