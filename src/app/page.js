"use client"

import Apply from '@/components/apply/Apply'
import Categories from '@/components/categories/Categories'
import HeaderBanner from '@/components/header/HeaderBanner'
import OfficeSlider from '@/components/slider/OfficeSlider'
import Information from '@/components/information/Information'
import Map from '@/components/map/Map'
import OurClients from '@/components/ourClients/OurClients'
import BrandSlider from '@/components/slider/BrandSlider'
import NewSlider from '@/components/slider/NewsSlider'
import React from 'react'
import Choose from '@/components/choose/Choose'
import ProductList from '@/components/product/ProductList'



const Home = () => {
 

  return (
    <>
      <HeaderBanner/>
      <Categories/>
      <OfficeSlider/>
      <Choose/>
      <ProductList />
      <OurClients/>
      <BrandSlider />
      <Information/>
      <NewSlider/>
      <Map/>
      <Apply/>
      
    </>
  )
}

export default Home