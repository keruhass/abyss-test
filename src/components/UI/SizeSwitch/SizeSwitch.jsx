import React, { useState } from 'react'

import { useMediaQuery } from '../../../Hooks/useMediaQuery'

import cl from './SizeSwitch.module.scss'

import StandartButton from '../StandartButton/StandartButton'

const SizeSwitch = ({create}) => {

    const [selection, setSelection] = useState('')

    const createNewItem = () => {
        const newItem = {id: Date.now(), size: `${selection}`, amount: 1}
        create(newItem)
    }

    {/* To do: Переделать по человечески */}

    const mobile = useMediaQuery("(max-width: 1200px)");

  return (

    <div className={cl.content}>

        <div className={cl.contentSizeSwitch}>
            <button
                onClick={() => {setSelection('S')}}
                className={selection === 'S' ? cl.contentButtonActive : cl.contentButton}
            >
                <a>S</a>
            </button>

            <button
                onClick={() => {setSelection('M')}}
                className={selection === 'M' ? cl.contentButtonActive : cl.contentButton}
            >
                <a>M</a>
            </button>

            <button
                onClick={() => {setSelection('L')}}
                className={selection === 'L' ? cl.contentButtonActive : cl.contentButton}
            >
                <a>L</a>
            </button>

            <button
                onClick={() => {setSelection('XL')}}
                className={selection === 'XL' ? cl.contentButtonActive : cl.contentButton}
            >
                <a>XL</a>
            </button>

            <button
                onClick={() => {setSelection('XXL')}}
                className={selection === 'XXL' ? cl.contentButtonActive : cl.contentButton}
            >
                <a>XXL</a>
            </button>
        </div>
        <StandartButton style={mobile ? {width: '320px', height: '32px', } : {width: '415px', height: '35px', }} onClick={createNewItem}>В корзину</StandartButton>
        
    </div>
  )
}

export default SizeSwitch
