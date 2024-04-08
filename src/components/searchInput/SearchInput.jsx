
import { IoSearch } from "react-icons/io5";



const SearchInput = () => {
  return (
        <form className="h-full w-full flex ">
            <input className="bg-[#F8F7F3] outline-none h-full px-4 text-sm rounded-tl-[0px] rounded-br-[24px] rounded-tr-[24px] rounded-bl-[0px]" type="text" placeholder="Поиск" />
            <button type="submit" className=" flex justify-center p-3 items-center bg-[#D5D1E1] h-full rounded-full">
                <IoSearch className="text-[#7A7687] text-2xl" />
            </button>
        </form>
  )
}

export default SearchInput