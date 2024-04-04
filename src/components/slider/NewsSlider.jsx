"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";


// Icons
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

// Images
import NewsImg1 from "@/images/News.png";
import NewsImg2 from "@/images/news2.png";

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container mx-auto py-10">
        <div className="float-left p-5 ">
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
                  <Image className="w-full object-contain" src={NewsImg1} />
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
                  <Image className="w-full object-contain" src={NewsImg2} />
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
                  <Image className="w-full object-contain" src={NewsImg1} />
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
                  <Image className="w-full object-contain" src={NewsImg1} />
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
                  <Image className="w-full object-contain" src={NewsImg1} />
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
                  <Image className="w-full object-contain" src={NewsImg1} />
                </div>
                <div className="p-4 space-y-2">
                    <span className="text-[#7A7687] text-xs">07.11.2022</span>
                    <h1 className="text-lg font-semibold text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</h1>
                    <p className="text-[#7A7687] text-base font-medium">Допускает внедрение поэтапного и развития общества.</p>
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
            <ButtonPrimary title="Все новости"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSlider;
