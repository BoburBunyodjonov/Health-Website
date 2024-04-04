import Apply from "@/components/apply/Apply"
import Categories from "@/components/categories/Categories"
import Information from "@/components/information/Information"
import Map from "@/components/map/Map"
import NewSlider from "@/components/slider/NewsSlider"

const Catalogue = () => {
  return (
    <>
      <Categories/>
      <NewSlider/>
      <Information/>
      <Map/>
      <Apply/>
    </>
  )
}

export default Catalogue