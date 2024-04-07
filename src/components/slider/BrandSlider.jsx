"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

// Carusel Slick
import Slider from "react-slick";

// Icons
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

// Images
import brandImg1 from "@/images/brand/brand1.png";
import brandImg2 from "@/images/brand/brand2.png";
import brandImg3 from "@/images/brand/brand3.png";

// Button Components
import { ButtonPrimary } from "../buttons/Buttons";

function BrandSlider() {
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
    speed: 300,
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
      <div  className="container mx-auto px-3 py-10">
        <div className="lg:float-left p-5 ">
            <h1 className="text-3xl text-[#202020] font-medium">Бренды</h1><br />
            <p className="font-base text-[#202020] font-medium">Эксклюзивные поставщики</p>
        </div>
        <div className="">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div className="p-2">
              <div className="border border-[#E5E2EE]">
                <div className="bg-white border-b h-[200px] border-[#E5E2EE] p-5 flex justify-center items-center">
                  <Image className="object-contain h-full" src={brandImg1} height={200} />
                </div>
                <div className="p-4">
                  <p className="text-base font-medium text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="border border-[#E5E2EE]">
                <div className="bg-white border-b h-[200px] border-[#E5E2EE] p-5 flex justify-center items-center">
                  <Image className="object-contain h-full" src={brandImg2}  />
                </div>
                <div className="p-4">
                  <p className="text-base font-medium text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="border border-[#E5E2EE]">
                <div className="bg-white border-b h-[200px] border-[#E5E2EE] p-5 flex justify-center items-center">
                  <Image className="object-contain h-full" src={brandImg3} />
                </div>
                <div className="p-4">
                  <p className="text-base font-medium text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</p>
                </div>
              </div>
            </div>
          </Slider>
          <br />
          <div className="flex justify-between">
            <div className="space-x-2 ">
              <button
                className="button border border-[#D5D1E1] rounded-full p-1"
                onClick={previous}
              >
                <GrFormPreviousLink className="text-2xl" />
              </button>
              <button className="button border border-[#D5D1E1] rounded-full p-1" onClick={next}>
                <GrFormNextLink className="text-2xl" />
              </button>
            </div>
            <ButtonPrimary title="Сертификаты"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandSlider;
