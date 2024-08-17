import React, { useState } from 'react'

import cl from './MobileProductGallery.module.scss'

import image_1 from '../../../media/images/ProductGalleryImg/1.png'
import image_2 from '../../../media/images/ProductGalleryImg/2.png'
import image_3 from '../../../media/images/ProductGalleryImg/3.png'
import image_4 from '../../../media/images/ProductGalleryImg/4.png'
import image_5 from '../../../media/images/ProductGalleryImg/5.png'
import image_6 from '../../../media/images/ProductGalleryImg/6.png'
import image_7 from '../../../media/images/ProductGalleryImg/7.png'

const MobileProductGallery = () => {

    const [imageSwitch, setImageSwitch] = useState(1)

    const increment = () => {
        setImageSwitch(imageSwitch + 1)

        if (imageSwitch >= 7) {
            setImageSwitch(1)
        }
    }

    const decrement = () => {
        setImageSwitch(imageSwitch - 1)

        if (imageSwitch <= 1) {
            setImageSwitch(7)
        }
    }

    const switchRender = (param) => {
    
        switch (param) {

          case 1:
            return <img src={image_1}></img>
          case 2:
            return <img src={image_2}></img>
          case 3:
            return <img src={image_3}></img>
          case 4:
            return <img src={image_4}></img>
          case 5:
            return <img src={image_5}></img>
          case 6:
            return <img src={image_6}></img>
          case 7:
            return <img src={image_7}></img>

        }
      }

  return (
    <div className={cl.gallery}>
        <div className={cl.galleryButtons}>
            <button onClick={increment}></button>
            <button onClick={decrement}></button>
        </div>
        {switchRender(imageSwitch)}
    </div>
  )
}

export default MobileProductGallery
