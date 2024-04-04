import Link from "next/link";

import Image from "next/image";

// Images
import Logo from "@/images/logo.png"

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


const Header = () => {
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
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={Logo} width={70}/>
          </Link>
          <Search/>
          <p className="text-xs text-[#7A7687]">Пн-Пт с 09:00-19:00 <br />
              Сб-Вс - выходной</p>
          <div class="flex md:order-2">
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <FaBars class="w-5 h-5" />
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border≈ border-gray-100 rounded-lg bg-[#F8F7F3] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            <li className="">
              <a
                href="#"
                className=""
              >
                <FaRegUser className="text-xl mx-3" />
                <span className="text-xs text-[#7A7687]">Войти</span>
              </a>
            </li>

              <li className="">
                <a
                  href="#"
                  class=""
                >
                  <MdFavoriteBorder  className="text-xl mx-3"/>

                  <span className="text-xs text-[#7A7687]">Избранное</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class=""
                >
                  <BiBarChartAlt className="text-xl mx-3" />
                  <span className="text-xs text-[#7A7687]">Сравнить</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class=""
                >
                  <MdOutlineShoppingCart className="text-xl mx-3" />
                  <span className="text-xs text-[#7A7687]">Корзина</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border">
              <div className="container mx-auto px-3 lg:flex justify-between">
                  <div className="flex items-center justify-center py-2">
                    <ul className="space-x-4">
                      <li className="inline-block">
                        <Link href="/catalogue" className="hover:text-[#088269] duration-200 flex items-center text-sm text-[#202020] font-semibold"><HiMenuAlt1 /> Каталог</Link>
                      </li>
                      <li className="inline-block">
                        <Link className="hover:text-[#088269] duration-200 text-sm text-[#202020] font-semibold" href="">Производители</Link>
                      </li>
                      <li className="inline-block">
                        <Link className="hover:text-[#088269] duration-200 text-sm text-[#202020] font-semibold" href="">Кабинеты под ключ</Link>
                      </li>
                      <li className="inline-block">
                        <Link className="hover:text-[#088269] duration-200 text-sm text-[#202020] font-semibold" href="">Услуги</Link>
                      </li>
                      <li className="inline-block">
                        <Link className="hover:text-[#088269] duration-200 text-sm text-[#202020] font-semibold" href="">Акции</Link>
                      </li>
                      <li className="inline-block">
                        <Link className="hover:text-[#088269] duration-200 text-sm text-[#202020] font-semibold" href="">Покупателям</Link>
                      </li>
                      <li className="inline-block">
                        <Link className="hover:text-[#088269] duration-200 text-sm text-[#202020] font-semibold" href="">Контакты</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <ul className="flex space-x-3">
                        <li className="flex items-center">
                            <span className="text-sm text-[#202020] font-semibold">Москва</span>
                            <CiLocationOn />
                        </li>
                        <li>
                          <ButtonTertiary title="+7(495)000-00-00"/>
                        </li>
                        <li>
                          <ButtonPrimary title="Заказать звонок" />
                        </li>
                    </ul>
                  </div>
              </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
