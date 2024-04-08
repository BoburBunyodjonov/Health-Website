"use client";

import Image from "next/image";

import "./cate.css";

// Components
import { ButtonPrimary } from "../buttons/Buttons";

// Images
import { CategoriesArray } from "./categoriesArr";
import { useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState(CategoriesArray);

  return (
    <>
      <div className="container py-10 space-y-3 mx-auto grid md:flex px-3 justify-center md:justify-between items-center">
        <h1 className="text-3xl font-medium">Популярные категории</h1>
        <ButtonPrimary dataAos="flip-up"  title="Все категории" />
      </div>
      <div className="container content grid sm:grid-cols-1 md:grid-cols-2 px-3 lg:grid-cols-4 gap-3 mx-auto">
        {categories.map((category, index) => {
          return (
            <div key={index} className="border rounded-lg border-[#E5E2EE]">
              <div className="bg-white rounded-[8px_8px_0px_0px] border-b border-[#E5E2EE] p-5 flex justify-center items-center">
                <Image className="object-contain w-full h-full" src={category.img} alt={category.title} />
              </div>
              <div className="p-4">
                <p className="text-base font-medium text-[#202020]">
                  {category.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
