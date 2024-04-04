import Link from "next/link";

// Icons
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";




const Information = () => {
  return (
    <div className="w-full bg-[#088269] py-10">
      <div className="container mx-auto grid md:grid-cols-2">
        <h1 className="text-[#F8F7F3] font-medium text-3xl">
          Информация о компании
        </h1>
        <div>
          <div className="relative mb-3">
            <h6 className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                data-collapse-target="collapse-1"
              >
                <span className="text-[#F8F7F3] font-semibold text-lg">What is Material Tailwind?</span>
                <AiOutlinePlusCircle className="text-white absolute right-0 pt-1 text-3xl fa fa-plus group-open:opacity-0" />

                <AiOutlineCloseCircle className="text-white absolute right-0 pt-1 text-3xl opacity-0 fa fa-minus group-open:opacity-100" />

              </button>
            </h6>
            <div
              data-collapse="collapse-1"
              className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-base leading-normal text-[#F8F7F3]">
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </div>
              <Link href="" className="ml-4 text-[#F8F7F3] text-sm font-semibold">Подробнее</Link>
            </div>
          </div>
          <div className="relative mb-3">
            <h6 className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                data-collapse-target="collapse-2"
              >
                <span className="text-[#F8F7F3] font-semibold text-lg">Преимущества сотрудников</span>
                <AiOutlinePlusCircle className="text-white absolute right-0 pt-1 text-3xl fa fa-plus group-open:opacity-0" />

                <AiOutlineCloseCircle className="text-white absolute right-0 pt-1 text-3xl opacity-0 fa fa-minus group-open:opacity-100" />

              </button>
            </h6>
            <div
              data-collapse="collapse-2"
              className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-base leading-normal text-[#F8F7F3]">
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </div>
              <Link href="" className="ml-4 text-[#F8F7F3] text-sm font-semibold">Подробнее</Link>
            </div>
          </div>
          <div className="relative mb-3">
            <h6 className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                data-collapse-target="collapse-3"
              >
                <span className="text-[#F8F7F3] font-semibold text-lg">Достижения компании</span>
                <AiOutlinePlusCircle className="text-white absolute right-0 pt-1 text-3xl fa fa-plus group-open:opacity-0" />

                <AiOutlineCloseCircle className="text-white absolute right-0 pt-1 text-3xl opacity-0 fa fa-minus group-open:opacity-100" />

              </button>
            </h6>
            <div
              data-collapse="collapse-3"
              className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-base leading-normal text-[#F8F7F3]">
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </div>
              <Link href="" className="ml-4 text-[#F8F7F3] text-sm font-semibold">Подробнее</Link>
            </div>
          </div>
          <div className="relative mb-3">
            <h6 className="mb-0">
              <button
                className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                data-collapse-target="collapse-4"
              >
                <span className="text-[#F8F7F3] font-semibold text-lg">What is Material Tailwind?</span>
                <AiOutlinePlusCircle className="text-white absolute right-0 pt-1 text-3xl fa fa-plus group-open:opacity-0" />

                <AiOutlineCloseCircle className="text-white absolute right-0 pt-1 text-3xl opacity-0 fa fa-minus group-open:opacity-100" />

              </button>
            </h6>
            <div
              data-collapse="collapse-4"
              className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="p-4 text-base leading-normal text-[#F8F7F3]">
                We're not always in the position that we want to be at. We're
                constantly growing. We're constantly making mistakes. We're
                constantly trying to express ourselves and actualize our dreams.
              </div>
              <Link href="" className="ml-4 text-[#F8F7F3] text-sm font-semibold">Подробнее</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
