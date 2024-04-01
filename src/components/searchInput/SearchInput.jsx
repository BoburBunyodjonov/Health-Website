
import { IoSearch } from "react-icons/io5";



const SearchInput = () => {
  return (
        <form className="h-full flex ">
            <input className="w-[419px] outline-none h-full px-4 text-sm rounded-tl-[0px] rounded-br-[24px] rounded-tr-[24px] rounded-bl-[0px]" type="text" placeholder="Поиск" />
            <button type="submit" className="w-[49px] flex justify-center items-center bg-[#D5D1E1] h-full rounded-full">
                <IoSearch className="  text-2xl" />
            </button>
        </form>
  )
}

export default SearchInput