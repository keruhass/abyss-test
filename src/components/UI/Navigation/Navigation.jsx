import React from 'react'

import cl from './Navigation.module.scss'

import logo from '../../../media/images/LogoImg/logo.svg'

import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={cl.content}>
      <img src={logo}/>
      <Link to="/cart">корзина</Link>
    </div>
  )
}

export default Navigation
