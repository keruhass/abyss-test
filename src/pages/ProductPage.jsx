import React from 'react'

import '../styles/pageStyles/ProductPage.scss'

import ProductGallery from '../components/UI/ProductGallery/ProductGallery'
import ProductDescription from '../components/ProductDescription'
import Navigation from '../components/UI/Navigation/Navigation'
import { RemoveScroll } from 'react-remove-scroll'

const ProductPage = () => {
  return (
    <RemoveScroll>
      <div className='productPage'>
      <Navigation/>
      <div className='productPageContent'>
        <ProductGallery></ProductGallery>
        <ProductDescription></ProductDescription>
      </div>

    </div>
    </RemoveScroll>
  )
}

export default ProductPage
