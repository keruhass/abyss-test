import React from 'react'

import cl from './ProductCard.module.scss'

import ProductImage from '../../../media/images/ProductShortImg/product.svg'

import ItemCounter from '../ItemCounter/ItemCounter'
import { useState } from 'react'

import { CSSTransition, SwitchTransition } from 'react-transition-group';

import trash from '../../../media/images/Icons/trash-icon.svg'

const ProductCard = (props) => {

  return (
    <div className={cl.content}>
        <div className={cl.info}>
            <img src={ProductImage}></img>
            <div className={cl.description}>
              <a className={cl.heading}>“maybe it <i>is</i> okay” t-shirt</a>
              <a className={cl.size}>Размер: {props.item.size}</a>
              <div style={{display: 'flex', gap: '10px'}}>
                <ItemCounter id={props.item.id} amount={props.item.amount}/> {/* Working on*/}
                <img src={trash} onClick={() => props.remove(props.item)}/>
              </div>
            </div>
        </div>
        <SwitchTransition>
        <CSSTransition
        in = {true}
        timeout={0}
        classNames="price"
        >
           <a>{props.item.amount*1500} руб</a>
        </CSSTransition>
        </SwitchTransition>
    </div>
  )
}

export default ProductCard
