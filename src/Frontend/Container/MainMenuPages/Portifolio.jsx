import React from 'react'
import { Helmet } from "react-helmet-async";
import OurCources from '../HomeRepo/OurCources'
import InnerBanner from '../../Shared/inner banner/InnerBanner'

const Portifolio = () => {
  return (
    <>
     <Helmet>
      <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "ThinkForDigital Portfolio",
  "url": "https://thinkfordigital.com/portfolio",
  "creator": {
    "@type": "Organization",
    "name": "ThinkForDigital"
  }
}
`}
</script>
        <title>Portfolio | ThinkForDigital</title>

        <meta
          name="description"
          content="Explore ThinkForDigital portfolio showcasing web design,summer training, development, and digital marketing projects for various businesses."
        />

        <link rel="canonical" href="https://thinkfordigital.com/portfolio" />
      </Helmet>
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
