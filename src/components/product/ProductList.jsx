import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import Link from "next/link";

// Icons
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { ButtonPrimary, ButtonSecondary } from "../buttons/Buttons";

const ProductList = () => {
  const [products ,setproducts]=useState([])

  const getproducts = async()=>{
    const res = await fetch("http://localhost:4000/products");
    const data = await res.json();
    setproducts(data);
  }

  useEffect(()=>{
    getproducts();
   },[])

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-3">
      <div className="lg:float-left p-5 space-y-2">
        <h1 className="text-3xl text-[#202020]">Каталог товаров</h1><br />
        <ul>
          <li>
            <Link href="" className="focus:text-[#088269] text-[#202020] opacity-[50%] text-base">Хиты продаж</Link>
          </li>
          <li>
            <Link href="" className="focus:text-[#088269] text-[#202020] opacity-[50%] text-base">Новинки</Link>
          </li>
          <li>
            <Link href="" className="focus:text-[#088269] text-[#202020] opacity-[50%] text-base">Акции</Link>
          </li>
        </ul>
      </div>
      <div>
        {products.length > 0 && (
          <Slider ref={sliderRef} {...settings}>
            {products.map((item, index) => (
              <ProductCard key={index} items={item} />
            ))}
          </Slider>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center py-10">
          <div className="space-x-2 py-2 flex justify-center md:justify-start">
            <button className="button border border-[#D5D1E1] rounded-full p-1" onClick={previous}>
              <GrFormPreviousLink className="text-2xl" />
            </button>
            <button className="button border border-[#D5D1E1] rounded-full p-1" onClick={next}>
              <GrFormNextLink className="text-2xl" />
            </button>
          </div>
          <div className="space-x-2 py-2 flex justify-center md:justify-end">
            <ButtonSecondary title="Бесплатная консультация" />
            <ButtonPrimary title="Все товары" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
