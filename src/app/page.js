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
import Choose from '@/components/choose/Choose'
import ProductList from '@/components/product/ProductList'
import Layout from '@/layout/Layout'



const Home = () => {

 
 

  return (
    <>
     <Layout>
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
     </Layout>
      
    </>
  )
}

export default Home