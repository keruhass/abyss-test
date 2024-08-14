import React from 'react'

import '../styles/pageStyles/PaymentPage.scss'

import StandartInput from '../components/UI/StandartInput/StandartInput'
import PaymentData from '../components/PaymentData'

import logo from '../media/images/LogoImg/logo.svg'
import PaymentItemsList from '../components/PaymentItemsList'
import { RemoveScroll } from 'react-remove-scroll'

const PaymentPage = () => {
  return (
    <div className='paymentPage'>
    <div className='paymentPageData'>
        <img src={logo}/>
        <PaymentData style={{marginTop: '150px'}}/>
    </div>
    <div className='paymentPageItems'>
        <PaymentItemsList/>
    </div>
    </div>
  )
}

export default PaymentPage
