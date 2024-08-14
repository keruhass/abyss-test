import React from 'react'

import '../styles/pageStyles/LoginPage.scss'
import SecondaryButton from '../components/UI/SecondaryButton/SecondaryButton'

import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import logo from '../media/images/LogoImg/logo.svg'

const LoginPage = () => {

    const navigate = useNavigate()

  return (
    <div className='loginPage'>
        <div className='loginPageContent'>
            <img src={logo}></img>
            <SecondaryButton onClick={() => {return navigate('/product')}} style={{width: '403px', height: '78px'}}>Войти</SecondaryButton>
        </div>
    </div>
  )
}

export default LoginPage
