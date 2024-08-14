import React from 'react'

import cl from './StandartInput.module.scss'

const StandartInput = ({children, ...props}) => {
  return (
    <input {...props}>
        {children}
    </input>
  )
}

export default StandartInput
