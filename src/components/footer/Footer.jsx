import Image from "next/image";
import Link from "next/link";

// Images
import Logo from "@/images/logo_white.png"
import Mir from "@/images/mir.png"
import Visa from "@/images/visa.png"
import Mastercard from "@/images/mastercard.png"

// Icons
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";




const Footer = () => {

  const navLinks = [
    { name: "О компании", href: "/" },
    { name: "Сертификаты", href: "/clothes" },
    { name: "Вакансии", href: "/jewelery" },
    { name: "Гарантии", href: "/accessories" },
    { name: "Услуги", href: "/accessories" },
    { name: "Акции", href: "/accessories" },
    { name: "Доставка", href: "/accessories" },
    { name: "Оплата", href: "/accessories" },
    { name: "Возврат", href: "/accessories" },
    { name: "FAQ", href: "/accessories" },
    { name: "Лизинг", href: "/accessories" },
    { name: "Отзывы", href: "/accessories" },
    { name: "Блог", href: "/accessories" },
  ];

  const catalogue = [
    { name: "Реанимация", href: "/" },
    { name: "Хирургия", href: "/clothes" },
    { name: "ОфтальмологияВакансии", href: "/jewelery" },
    { name: "Лабораторная диагностика", href: "/accessories" },
    { name: "Акушерство и Гинекология", href: "/accessories" },
    { name: "Гистология", href: "/accessories" },
    { name: "Косметология", href: "/accessories" },
    { name: "Орториноларингология", href: "/accessories" },
    { name: "Рентгенология и томография", href: "/accessories" },
    { name: "Стрерилизация", href: "/accessories" },
    { name: "Физиотерапия и реабилитация", href: "/accessories" },
    { name: "Функциональная диагностика", href: "/accessories" },
    { name: "Эндоскопия", href: "/accessories" },
    { name: "Новинки", href: "/accessories" },
    { name: "Распродажи", href: "/accessories" },
    { name: "Кабинеты под ключ", href: "/accessories" },
    { name: "Скачать каталог", href: "/accessories" },
  ];
  const newDate = new Date();
  const year = newDate.getFullYear();

  return (
    <footer className="bg-[#088269] px-5">
        <div className="container px-3 mx-auto lg:flex gap-4 py-5">
            <div className="w-full lg:w-[20%]  lg:order-1 p-5 space-y-3">
              <h1 className="font-semibold text-sm text-[#F8F7F3]">Покупателям</h1>
                <hr />
              <ul className="grid grid-cols-2 space-y-1">
                {
                  navLinks.map((link) => {
                    return (
                      <li
                        key={link.name}
                      >
                        <Link
                          href={link.href}
                          className="text-sm font-normal text-[#F8F7F3]"
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
            <div className="w-full lg:w-[60%]  lg:order-2 p-5 space-y-3">
              <h1 className="font-semibold text-sm text-[#F8F7F3]">Каталогa</h1>
              <hr />
              <ul className="grid grid-cols-3 gap-x-4 space-y-1">
                {
                  catalogue.map((link) => {
                    return (
                      <li
                        key={link.name}
                      >
                        <Link
                          href={link.href}
                          className="text-sm font-normal text-[#F8F7F3]"
                        >
                          {link.name}
                        </Link>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
            <div className="w-full lg:w-[20%]  lg:order-3 p-5 space-y-3">
              <h1 className="font-semibold text-sm text-[#F8F7F3]">Контакты</h1>
              <hr />
                <ul className="text-[#F8F7F3] space-y-2 text-sm">
                  <li className="font-semibold">Адрес:</li>
                  <li>г. Москва, ул. Московская, д. 35 </li>
                  <li className="font-semibold">Карта проезда</li>
                  <li>График работы:</li>
                  <li>
                      Пн-Пт с 09:00-19:00, <br />
                      Сб-Вс - выходной
                  </li>
                  <li>
                      +7 000-000-00-00 <br />
                      +7 495-000-00-00
                  </li>
                  <li>
                      8 800-000-00-00
                      info@mail.ru
                  </li>
                </ul>
            </div>
        </div>
        <div className="container border-t mx-auto py-5 px-3 grid sm:grid-cols-2 gap-5 justify-center lg:grid-cols-3 xl:grid-cols-5">
            <div>
              <Image src={Logo} />
              <span className="text-xs text-[#F8F7F3]">ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</span>
            </div>
            <div >
                <p className="text-sm font-semibol text-[#F8F7F3] ">Мы в соцсетях</p>
                <ul className="flex space-x-5 py-2">
                  <li className="bg-[#f8f7f3] p-2 rounded-md">
                    <Link className="" href=""><SlSocialVkontakte /></Link>
                  </li>
                  <li className="bg-[#f8f7f3] p-2 rounded-md">
                    <Link className="" href=""><FaTelegramPlane /></Link>
                  </li>
                  <li className="bg-[#f8f7f3] p-2 rounded-md">
                    <Link className="" href=""><FaWhatsapp /></Link>
                  </li>
                </ul>
            </div>
            <ul className="text-[#F8F7F3] text-sm">
              <li>Партнерская программа</li>
              <li>Оптовые продажи</li>
              <li>Реквизиты</li>
            </ul>
            <ul className="text-[#F8F7F3] text-sm">
              <li>Политика конфиденциальности</li>
              <li>Условия соглашения</li>
              <li>Карта сайта</li>
            </ul>
            <div >
                <p className="text-sm font-semibol text-[#F8F7F3] ">Способы оплаты</p>
                <ul className="flex items-center space-x-5 py-2">
                  <li className="">
                    <Link className="" href="">
                        <Image src={Mastercard} />
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" href="">
                      <Image src={Visa} />
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" href="">
                      <Image src={Mir} />
                    </Link>
                  </li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto py-5 px-3 md:flex">
          <p className="text-[#F8F7F3] text-xs">© {year} Медоборудование Все права защищены</p>
          <span className="text-[#F8F7F3] text-xs font-medium opacity-[60%]">Информация на данном сайте носит справочный характер и не является публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса Российской Федерации</span>
        </div>
    </footer>
  )
}

export default Footer