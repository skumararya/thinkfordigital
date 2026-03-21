import React from 'react'
import OurCources from '../HomeRepo/OurCources'
import InnerBanner from '../../Shared/inner banner/InnerBanner'

const Portifolio = () => {
  return (
    <>
       <InnerBanner 
  pageTitle="Portfolio"
  breadcrumb1="Home"
  breadcrumb1Link="/"
  breadcrumb2="Portfolio"
    />
    <OurCources />
    </>
  )
}

export default Portifolio
