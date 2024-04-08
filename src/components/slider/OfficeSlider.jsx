
"use client"

import Slider from "react-slick";
import Image from "next/image";

// Hooks
import { useRef } from "react";

// Icons
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

// Images
import Office1 from "@/images/office/office1.png";
import Office2 from "@/images/office/office2.png";
import Office3 from "@/images/office/office3.png";

// Button Components
import { ButtonPrimary, ButtonSecondary } from "../buttons/Buttons";

const OfficeSlider = () => {

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
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
    <>
    <div className="container mx-auto py-10">
        <div className="">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div className="p-2"  >
              <div className=" rounded-xl ">
                <div className=" w-full flex justify-center items-center">
                  <Image className="w-full object-contain" src={Office1} alt="Offic img 1" />
                </div>
                <div className="p-4 border border-[#E5E2EE] border-t-0 rounded-[0px_0px_12px_12px] space-y-2">
                    <h1 className="text-base font-semibold text-[#202020]">Экспресс лаборатория</h1>
                </div>
              </div>
            </div>
            <div className="p-2" >
              <div className=" rounded-xl">
                <div className="w-full flex justify-center items-center">
                  <Image className="w-full object-contain" src={Office2}  alt="Office Img 2" />
                </div>
                <div className="p-4 space-y-2 border border-[#E5E2EE] border-t-0 rounded-[0px_0px_12px_12px]">
                    <h1 className="text-base font-semibold text-[#202020]">Лазерная терапия</h1>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className=" rounded-xl ">
                <div className="w-full flex justify-center items-center">
                  <Image className="w-full object-contain" src={Office3} alt="Office Img 3" />
                </div>
                <div className="p-4 space-y-2 border border-[#E5E2EE] border-t-0 rounded-[0px_0px_12px_12px]">
                    <h1 className="text-base font-semibold text-[#202020]">Операционный блок</h1>
                </div>
              </div>
            </div>
          </Slider>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center  py-10">
            <div className="space-x-2 py-2 flex justify-center md:justify-start">
              <button
                className="button border border-[#D5D1E1] rounded-full p-1"
                onClick={previous}
              >
                <GrFormPreviousLink className="text-2xl" />
              </button>
              <button
                className="button border border-[#D5D1E1] rounded-full p-1"
                onClick={next}
              >
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
    </>
  )
}

export default OfficeSlider