import React from 'react'

import cl from './StandartButton.module.scss'

const StandartButton = ({children, styles, ...props}) => {

  return (
    
    <button {...props} className={cl.btn}>
      {children}
    </button>
  )
}

export default StandartButton

//style={{width: `${styles.width}`, height: `${styles.height}`}}