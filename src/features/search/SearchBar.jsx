import { useContext } from "react";
import { assets } from "../../assets/assets";
import { ShopContext } from "../../context/ShopContext";

export default function SearchBar() {
  const { search, setSearch, showSearchBar, setShowSearchBar } =
    useContext(ShopContext);
  return showSearchBar ? (
    <div className="w-full border-b bg-gray-50 flex items-center justify-center p-4">
      <div className="py-2 px-5 rounded-full outline-none border border-gray-400 w-1/2 bg-gray-50 flex items-center min-w-72">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
          className="bg-inherit flex-1 outline-none"
        />
        <img src={assets.search_icon} className="size-5" />
      </div>
      <img
        src={assets.cross_icon}
        className="size-4 ml-2 cursor-pointer"
        onClick={() => {
          setShowSearchBar(false);
          setSearch("");
        }}
      />
    </div>
  ) : null;
}
