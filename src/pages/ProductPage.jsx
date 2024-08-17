import React from 'react'

import { useMediaQuery } from '../Hooks/useMediaQuery'

import '../styles/pageStyles/ProductPage.scss'

import ProductGallery from '../components/UI/ProductGallery/ProductGallery'
import ProductDescription from '../components/ProductDescription'
import Navigation from '../components/UI/Navigation/Navigation'
import { RemoveScroll } from 'react-remove-scroll'
import MobileProductGallery from '../components/UI/MobileProductGallery/MobileProductGallery'

const ProductPage = () => {

  const mobile = useMediaQuery("(max-width: 1200px)")

  return (
      <div className='productPage'>
      <Navigation/>
      <div className='productPageContent'>
        {/* <ProductGallery></ProductGallery> */}
        {mobile
        ? <MobileProductGallery/>
        : <ProductGallery/>
        }
        <ProductDescription></ProductDescription>
      </div>

    </div>
  )
}

export default ProductPage
