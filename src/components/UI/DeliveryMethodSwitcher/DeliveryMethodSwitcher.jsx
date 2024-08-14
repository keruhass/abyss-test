import React, { useState } from 'react'

import cl from './DeliveryMethodSwitcher.module.scss'

const DeliveryMethodSwitcher = () => {

    const [methodSwitch, setMethodSwitch] = useState(1)

  return (
    <div className={cl.content}>
      <div className={cl.contentFirstItem} onClick={() => setMethodSwitch(1)}>
        <button>
            {methodSwitch === 1 &&
                <a>&#8226;</a>
            }
        </button>
        <a>Почта России</a>
      </div>
      <div className={cl.contentSecondItem} onClick={() => setMethodSwitch(2)}>
      <button>
            {methodSwitch === 2 &&
                <a>&#8226;</a>
            }
        </button>
        <a>СДЭК</a>
      </div>
    </div>
  )
}

export default DeliveryMethodSwitcher
