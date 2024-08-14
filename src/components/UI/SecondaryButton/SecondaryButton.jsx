import React from 'react'

import cl from './SecondaryButton.module.scss'

const SecondaryButton = ({children, ...props}) => {
  return (
    <button {...props} className={cl.btn}>
        {children}
    </button>   
  )
}

export default SecondaryButton
