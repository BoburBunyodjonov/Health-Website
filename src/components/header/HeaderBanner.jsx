// Slider Images

"use client";

// Images
import Banner from "@/images/Banner.png";
import Image from "next/image";

import Slider from "react-slick";

// Icons
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

import { ButtonPrimary, ButtonSecondary } from "../buttons/Buttons";
import { useRef } from "react";

const HeaderBanner = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="w-full py-5 px-3">
        <div className="relative container mx-auto">
          <Slider
            arrows={false}
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
            className=""
          >
            <div key={1}>
              <div className=" bg-[#E5E4ED] rounded-[10px] mx-auto grid md:grid-cols-2">
                <div className=" p-5">
                  <h1 className="text-5xl text-[#202020] font-medium ">
                    Заголовок баннера в пару строк
                  </h1>{" "}
                  <br />
                  <p className="text-[#7A7687] text-base">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit, sed do eiusmod tempor{" "}
                  </p>
                  <br />
                  <div className="space-x-5">
                    <ButtonPrimary title="Запросить цену" />
                    <ButtonSecondary title="В каталог" />
                  </div>
                </div>
                <div>
                  <Image className=" w-full h-full object-cover" src={Banner} />
                </div>
              </div>
            </div>
            <div key={2}>
              <div className=" bg-[#E5E4ED] rounded-[10px] mx-auto grid md:grid-cols-2">
                <div className=" p-5">
                  <h1 className="text-5xl text-[#202020] font-medium ">
                    Заголовок баннера в пару строк
                  </h1>{" "}
                  <br />
                  <p className="text-[#7A7687] text-base">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit, sed do eiusmod tempor{" "}
                  </p>
                  <br />
                  <div className="space-x-5">
                    <ButtonPrimary title="Запросить цену" />
                    <ButtonSecondary title="В каталог" />
                  </div>
                </div>
                <div>
                  <Image className=" w-full h-full object-containe" src={Banner} />
                </div>
              </div>
            </div>
            <div key={3}>
              <div className=" bg-[#E5E4ED] rounded-[10px] mx-auto grid md:grid-cols-2">
                <div className=" p-5">
                  <h1 className="text-5xl text-[#202020] font-medium ">
                    Заголовок баннера в пару строк
                  </h1>{" "}
                  <br />
                  <p className="text-[#7A7687] text-base">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit, sed do eiusmod tempor{" "}
                  </p>
                  <br />
                  <div className="space-x-5">
                    <ButtonPrimary title="Запросить цену" />
                    <ButtonSecondary title="В каталог" />
                  </div>
                </div>
                <div>
                  <Image className=" w-full h-full object-containe" src={Banner} />
                </div>
              </div>
            </div>
            <div key={4}>
              <div className=" bg-[#E5E4ED] rounded-[10px] mx-auto grid md:grid-cols-2">
                <div className=" p-5">
                  <h1 className="text-5xl text-[#202020] font-medium ">
                    Заголовок баннера в пару строк
                  </h1>{" "}
                  <br />
                  <p className="text-[#7A7687] text-base">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit, sed do eiusmod tempor{" "}
                  </p>
                  <br />
                  <div className="space-x-5">
                    <ButtonPrimary title="Запросить цену" />
                    <ButtonSecondary title="В каталог" />
                  </div>
                </div>
                <div>
                  <Image className=" w-full h-full object-containe" src={Banner} />
                </div>
              </div>
            </div>
            <div key={5}>
              <div className=" bg-[#E5E4ED] rounded-[10px] mx-auto grid md:grid-cols-2">
                <div className=" p-5">
                  <h1 className="text-5xl text-[#202020] font-medium ">
                    Заголовок баннера в пару строк
                  </h1>{" "}
                  <br />
                  <p className="text-[#7A7687] text-base">
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit, sed do eiusmod tempor{" "}
                  </p>
                  <br />
                  <div className="space-x-5">
                    <ButtonPrimary title="Запросить цену" />
                    <ButtonSecondary title="В каталог" />
                  </div>
                </div>
                <div>
                  <Image className=" w-full h-full object-containe" src={Banner} />
                </div>
              </div>
            </div>
           
          </Slider>
          <div className="absolute bottom-[28px] right-[53px] space-x-2 mx-auto ">
            <button className="button bg-white rounded-full p-1" onClick={previous}>
              <GrFormPreviousLink className="text-2xl" />
            </button>
            <button className="button bg-white rounded-full p-1" onClick={next}>
              <GrFormNextLink className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-3"></div>
    </>
  );
};

export default HeaderBanner;
