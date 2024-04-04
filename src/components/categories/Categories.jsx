"use client"

import Image from "next/image"

// Components
import { ButtonPrimary } from "../buttons/Buttons"

// Images
import product1 from "@/images/products/product1.png"

const Categories = () => {

  return (
    <>
        <div className="container py-10 mx-auto grid md:flex justify-between items-center">
            <h1 className="text-3xl font-medium">Популярные категории</h1>
            <ButtonPrimary title="Все категории" />
        </div>
        <div className="container mx-auto grid md:grid-cols-4">
            <div className="card p-2">
              <div className="border border-[#E5E2EE]">
                <div className="bg-white border-b  border-[#E5E2EE] p-5 flex justify-center items-center">
                  <Image className="object-contain h-full" src={product1}/>
                </div>
                <div className="p-4">
                  <p className="text-base font-medium text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</p>
                </div>
              </div>
            </div>
            <div className="card p-2">
              <div className="border border-[#E5E2EE]">
                <div className="bg-white border-b  border-[#E5E2EE] p-5 flex justify-center items-center">
                  <Image className="object-contain h-full" src={product1}/>
                </div>
                <div className="p-4">
                  <p className="text-base font-medium text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</p>
                </div>
              </div>
            </div>
            <div className="card p-2 row-start-1 row-end-3">
              <div className="border border-[#E5E2EE]">
                <div className="bg-white border-b border-[#E5E2EE] p-5 flex justify-center items-center">
                  <Image className="object-contain h-full" src={product1}/>
                </div>
                <div className="p-4">
                  <p className="text-base font-medium text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</p>
                </div>
              </div>
            </div>
            <div className="card p-2">
              <div className="border border-[#E5E2EE]">
                <div className="bg-white border-b  border-[#E5E2EE] p-5 flex justify-center items-center">
                  <Image className="object-contain h-full" src={product1}/>
                </div>
                <div className="p-4">
                  <p className="text-base font-medium text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</p>
                </div>
              </div>
            </div>
            <div className="card p-2">
              <div className="border border-[#E5E2EE]">
                <div className="bg-white border-b  border-[#E5E2EE] p-5 flex justify-center items-center">
                  <Image className="object-contain h-full" src={product1}/>
                </div>
                <div className="p-4">
                  <p className="text-base font-medium text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</p>
                </div>
              </div>
            </div>
            <div className="card p-2">
              <div className="border border-[#E5E2EE]">
                <div className="bg-white border-b  border-[#E5E2EE] p-5 flex justify-center items-center">
                  <Image className="object-contain h-full" src={product1}/>
                </div>
                <div className="p-4">
                  <p className="text-base font-medium text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</p>
                </div>
              </div>
            </div>
            <div className="card p-2">
              <div className="border border-[#E5E2EE]">
                <div className="bg-white border-b  border-[#E5E2EE] p-5 flex justify-center items-center">
                  <Image className="object-contain h-full" src={product1}/>
                </div>
                <div className="p-4">
                  <p className="text-base font-medium text-[#202020]">НМИЦ онкологии им. Н.Н. Блохина</p>
                </div>
              </div>
            </div>
           
        </div>


    </>
  )
}

export default Categories