import React from 'react'

import cl from './CheckOutButton.module.scss'

const CheckOutButton = (props) => {
  return (
    <button {...props} className={cl.checkOutButton}>
        <a>Оформить заказ</a>
    </button>
  )
}

export default CheckOutButton

// ToDo: Прокинуть пропсы, исправить отступ