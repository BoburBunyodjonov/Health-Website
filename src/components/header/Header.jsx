'use client'

import Link from "next/link";

import Image from "next/image";

// Images
import Logo from "@/images/logo.png";

// Icons
import { FaBars } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { BiBarChartAlt } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";

//Components
import Search from "../search/Search";
import { ButtonPrimary, ButtonTertiary } from "../buttons/Buttons";
import Modal from "../modal/Modal";
import TransitionsModal from "../modal/Modal";
import { useState } from "react";

const Header = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <header className="w-full ">
      <div className="w-full border-b border-[#E5E2EE]">
        <div className="container mx-auto text-[#7A7687] text-xs grid md:grid-cols-2 items-center justify-center">
          <ul className="">
            <li className="inline-block p-3">
              <Link href="">О компании</Link>
            </li>
            <li className="inline-block p-3">
              <Link href="">Доставка</Link>
            </li>
            <li className="inline-block p-3">
              <Link href="">Оплата</Link>
            </li>
            <li className="inline-block p-3">
              <Link href="">Гарантии</Link>
            </li>
            <li className="inline-block p-3">
              <Link href="">Блог</Link>
            </li>
          </ul>
          <ul className="md:flex md:justify-end items-center">
            <li className="inline-block p-3">info@mail.ru</li>
            <li className="inline-block p-3">
              г. Москва, ул. Московская, д. 35
            </li>
          </ul>
        </div>
      </div>
      <nav class="">
        <div class="container mx-auto grid lg:grid-cols-2 gap-5 items-center p-3">
          <div className="w-full space-y-2 sm:flex justify-between items-center">
            <Link
              href="/"
              class="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image className="" src={Logo} width={100} height={100} />
            </Link>
            <Search />
          </div>
          <div className="w-full space-y-2 sm:flex justify-between  items-center">
            <p className="text-xs text-center text-[#7A7687]">
              Пн-Пт с 09:00-19:00
              Сб-Вс - выходной
            </p>
            <div class="items-center justify-between w-full md:flex md:w-auto">
              <ul class="flex justify-center">
                <li>
                  <p onClick={handleOpen}  className="px-2 cursor-pointer flex flex-col justify-center">
                    <FaRegUser className="text-xl mx-auto" />
                    <span  className=" text-xs text-[#7A7687]">Войти</span>
                  </p>
                </li>
                <li>
                  <Link href="#" className="px-2 text-center flex flex-col justify-center">
                    <MdFavoriteBorder className="text-xl mx-auto" />

                    <span className="text-xs text-[#7A7687]">Избранное</span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="px-2 text-center flex flex-col justify-center">
                    <BiBarChartAlt className="text-xl mx-auto" />
                    <span className="text-xs text-[#7A7687]">Сравнить</span>
                  </Link>
                </li>
                <li>
                  <Link href="/cart" className="px-2 text-center flex flex-col justify-center">
                    <MdOutlineShoppingCart className="text-xl mx-auto" />
                    <span className="text-xs text-[#7A7687]">Корзина</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border">
          <div className="container mx-auto px-3 lg:flex justify-between">
            <div className="flex items-center justify-center py-2">
              <ul className="space-x-4">
                <li className="inline-block">
                  <Link
                    href="/catalogue"
                    className="flex items-center text-sm text-[#202020] font-semibold"
                  >
                    <HiMenuAlt1 /> Каталог
                  </Link>
                </li>
                <li className="inline-block">
                  <Link
                    className="hover:text-[#088269] duration-200 text-sm text-[#202020] font-semibold"
                    href=""
                  >
                    Производители
                  </Link>
                </li>
                <li className="inline-block">
                  <Link
                    className="hover:text-[#088269] duration-200 text-sm text-[#202020] font-semibold"
                    href=""
                  >
                    Кабинеты под ключ
                  </Link>
                </li>
                <li className="inline-block">
                  <Link
                    className="hover:text-[#088269] duration-200 text-sm text-[#202020] font-semibold"
                    href=""
                  >
                    Услуги
                  </Link>
                </li>
                <li className="inline-block">
                  <Link
                    className="hover:text-[#088269] duration-200 text-sm text-[#202020] font-semibold"
                    href=""
                  >
                    Акции
                  </Link>
                </li>
                <li className="inline-block">
                  <Link
                    className="hover:text-[#088269] duration-200 text-sm text-[#202020] font-semibold"
                    href=""
                  >
                    Покупателям
                  </Link>
                </li>
                <li className="inline-block">
                  <Link
                    className="hover:text-[#088269] duration-200 text-sm text-[#202020] font-semibold"
                    href=""
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center py-2">
              <ul className="flex space-x-3">
                <li className="flex items-center">
                  <span className="text-sm text-[#202020] font-semibold">
                    Москва
                  </span>
                  <CiLocationOn />
                </li>
                <li>
                  <ButtonTertiary title="+7(495)000-00-00" />
                </li>
                <li>
                  <ButtonPrimary title="Заказать звонок" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <TransitionsModal open={open} handleClose={handleClose} />
    </header>
  );
};

export default Header;
