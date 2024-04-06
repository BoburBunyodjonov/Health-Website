

// Components
import DropDown from "../dropDown/DropDown";
import SearchInput from "../searchInput/SearchInput";


const Search = () => {
  return (
    <div className=" h-[41px] border border-[#D5D1E1] flex items-center rounded-3xl">
            <DropDown title="Все категории" />
            <div className="h-full rounded-3xl bg-[#D5D1E1]">
              <SearchInput/>
            </div>
    </div>
  )
}

export default Search