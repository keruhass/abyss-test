import React from 'react'

import cl from './ProductGallery.module.scss'

import image_1 from '../../../media/images/ProductGalleryImg/1.png'
import image_2 from '../../../media/images/ProductGalleryImg/2.png'
import image_3 from '../../../media/images/ProductGalleryImg/3.png'
import image_4 from '../../../media/images/ProductGalleryImg/4.png'
import image_5 from '../../../media/images/ProductGalleryImg/5.png'
import image_6 from '../../../media/images/ProductGalleryImg/6.png'
import image_7 from '../../../media/images/ProductGalleryImg/7.png'

const ProductGallery = () => {
  return (
    <div className={cl.gallery}>
      <img src={image_1}></img>
      <img src={image_2}></img>
      <img src={image_3}></img>
      <img src={image_4}></img>
      <img src={image_5}></img>
      <img src={image_6}></img>
      <img src={image_7}></img>
      <div style={{width: '934px', height: '155px'}}></div>
    </div>
  )
}

export default ProductGallery
