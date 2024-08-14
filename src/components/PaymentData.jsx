import React from 'react'

import '../styles/componentStyles/PaymentData.scss'
import StandartInput from './UI/StandartInput/StandartInput'
import StandartCheckbox from './UI/StandartCheckbox/StandartCheckbox'
import DeliveryMethodSwitcher from './UI/DeliveryMethodSwitcher/DeliveryMethodSwitcher'
import CheckOutButton from './UI/CheckOutButton/CheckOutButton'
import StandartButton from './UI/StandartButton/StandartButton'

const PaymentData = ({...props}) => {
  return (
    <div {...props} className='paymentData'>
      <div className='paymentDataContacts'>
        <a>Контакты</a>
        <StandartInput placeholder='Email'/>
        <div className='paymentDataContactsNews'>
            <StandartCheckbox/>
            <a>отправлять мне новости и акции</a>
        </div>
      </div>
      <div className='paymentDataDelivery'>
        <a>Доставка</a>
        <div className='paymentDataDeliveryInputs'>
            <StandartInput style={{width: '263px'}} placeholder='Имя'/>
            <StandartInput style={{width: '263px'}} placeholder='Фамилия'/>
            <StandartInput style={{width: '165px'}} placeholder='Область'/>
            <StandartInput style={{width: '165px'}} placeholder='Город'/>
            <StandartInput style={{width: '165px'}} placeholder='Почтовый индекс'/>
            <StandartInput style={{width: '580px'}} placeholder='Адрес'/>
            <StandartInput style={{width: '580px'}} placeholder='Номер телефона'/>
        </div>
      </div>
      <div className='paymentDataDeliveryMethod'>
        <a className='paymentDataDeliveryMethodDesc'>Способ доставки</a>
        <DeliveryMethodSwitcher/>
      </div>
      <StandartButton style={{width:'580px', height: '43px', margin: '0 auto', fontFamily: 'Gotham-Medium', fontSize: '20px'}}>Оплатить</StandartButton>
    </div>
  )
}

export default PaymentData
