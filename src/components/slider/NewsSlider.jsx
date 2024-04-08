"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";


// Icons
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

// Images
import NewsImg1 from "@/images/news/News1.png";
import NewsImg2 from "@/images/news/News2.png";
import NewsImg3 from "@/images/news/News3.png";

// Components
import { ButtonPrimary } from "../buttons/Buttons";

function NewSlider() {
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
      <div  className="container mx-auto px-3 py-10" >
        <div className="lg:float-left p-5 ">
            <h1 className="text-3xl text-[#202020] font-medium">Новости <br /> компании</h1><br />
        </div>
        <div className="">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div className="p-2">
              <div className="border rounded-xl border-[#E5E2EE]">
                <div className="border-b w-full border-[#E5E2EE] flex justify-center items-center">
                  <Image className="w-full object-contain" src={NewsImg1} alt="New Slider 1" />
                </div>
                <div className="p-4 space-y-2">
                    <span className="text-[#7A7687] text-xs">07.11.2022</span>
                    <h1 className="text-lg font-semibold text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</h1>
                    <p className="text-[#7A7687] text-base font-medium">Допускает внедрение поэтапного и развития общества.</p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="border rounded-xl border-[#E5E2EE]">
                <div className="border-b w-full border-[#E5E2EE] flex justify-center items-center">
                  <Image className="w-full object-contain" src={NewsImg2}  alt="New Slider 2"/>
                </div>
                <div className="p-4 space-y-2">
                    <span className="text-[#7A7687] text-xs">07.11.2022</span>
                    <h1 className="text-lg font-semibold text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</h1>
                    <p className="text-[#7A7687] text-base font-medium">Допускает внедрение поэтапного и развития общества.</p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="border rounded-xl border-[#E5E2EE]">
                <div className="border-b w-full border-[#E5E2EE] flex justify-center items-center">
                  <Image className="w-full object-contain" src={NewsImg3} alt="New Slider 3" />
                </div>
                <div className="p-4 space-y-2">
                    <span className="text-[#7A7687] text-xs">07.11.2022</span>
                    <h1 className="text-lg font-semibold text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</h1>
                    <p className="text-[#7A7687] text-base font-medium">Допускает внедрение поэтапного и развития общества.</p>
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
              <ButtonPrimary title="Все новости"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSlider;
