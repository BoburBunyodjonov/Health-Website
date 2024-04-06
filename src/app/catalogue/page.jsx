"use client"

import Apply from "@/components/apply/Apply"
import Categories from "@/components/categories/Categories"
import Choose from "@/components/choose/Choose"
import Information from "@/components/information/Information"
import Map from "@/components/map/Map"
import ProductList from "@/components/product/ProductList"
import BrandSlider from "@/components/slider/BrandSlider"
import NewSlider from "@/components/slider/NewsSlider"
import OfficeSlider from "@/components/slider/OfficeSlider"
import { Breadcrumbs, Typography } from "@mui/material"
import Link from "next/link"
import { usePathname } from 'next/navigation'

// Icons
import { MdNavigateNext } from "react-icons/md";


const Catalogue = () => {

  const pathname = usePathname();


  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Главная
    </Link>,
    <Typography key="3" color="text.primary">
      Каталог
    </Typography>,
  ];
  return (
    <>
      <div className="container mx-auto px-5 py-5">
        {}
        <Breadcrumbs
          separator={<MdNavigateNext />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      <Categories/>
      <OfficeSlider/>
      <Choose/>
      <ProductList/>
      <BrandSlider/>
      <NewSlider/>
      <Information/>
      <Map/>
      <Apply/>
    </>
  )
}

export default Catalogue