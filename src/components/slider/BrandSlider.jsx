"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";

import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

import brandImg1 from "@/images/brand1.png";
import Image from "next/image";
import { ButtonPrimary } from "../buttons/Buttons";

function Resizable() {
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
                <div className="bg-white border-b border-[#E5E2EE] p-5 flex justify-center items-center">
                  <Image className="object-contain" src={brandImg1} />
                </div>
                <div className="p-4">
                  <p className="text-base font-medium text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="border border-[#E5E2EE]">
                <div className="bg-white border-b border-[#E5E2EE] p-5 flex justify-center items-center">
                  <Image className="object-contain" src={brandImg1} />
                </div>
                <div className="p-4">
                  <p className="text-base font-medium text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="border border-[#E5E2EE]">
                <div className="bg-white border-b border-[#E5E2EE] p-5 flex justify-center items-center">
                  <Image className="object-contain" src={brandImg1} />
                </div>
                <div className="p-4">
                  <p className="text-base font-medium text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</p>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="border border-[#E5E2EE]">
                <div className="bg-white border-b border-[#E5E2EE] p-5 flex justify-center items-center">
                  <Image className="object-contain" src={brandImg1} />
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

export default Resizable;
