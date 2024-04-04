import Apply from '@/components/apply/Apply'
import HeaderBanner from '@/components/header/HeaderBanner'
import Information from '@/components/information/Information'
import Map from '@/components/map/Map'
import BrandSlider from '@/components/slider/BrandSlider'
import NewSlider from '@/components/slider/NewsSlider'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeaderBanner/>
      <BrandSlider/>
      <Information/>
      <NewSlider/>
      <Map/>
      <Apply/>
      
    </>
  )
}

export default Home