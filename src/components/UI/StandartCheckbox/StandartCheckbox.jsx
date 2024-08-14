import React, { useState } from 'react'

import cl from './StandartCheckbox.module.scss'

const StandartCheckbox = () => {

    const [isChecked, setIsChecked] = useState(false)

    const check = () => {

        if (isChecked === false) {
            setIsChecked(true)
        }
        if (isChecked === true) {
            setIsChecked(false)
        }
    }

  return (
    <button onClick={check} className={isChecked === false ? cl.content : cl.contentChecked}>
        {isChecked &&
            <a>&#10004;</a>
        }
    </button>
  )
}

export default StandartCheckbox
