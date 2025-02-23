/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
export default function SecondaryNavigation({ setShowSidebar }) {
  const {setShowSearchBar, showSearchBar, getCartCount} = useContext(ShopContext);
  const navigate = useNavigate();
  const location = useLocation();
  const search = () => {
    if(!showSearchBar || location !== "collection"){
      setShowSearchBar(true)
      navigate("collection")
    }
  }
  return (
    <div className="flex items-center gap-6">
      <img
        src={assets.search_icon}
        alt="search"
        className="w-5 cursor-pointer"
        onClick={search}
      />
      {/* USER ICON NAV*/}
      <div className="group relative">
        <img
          src={assets.profile_icon}
          alt="profile"
          className="w-5 cursor-pointer"
        />
        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
          <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
            <p className="cursor-pointer hover:text-black">My Profile</p>
            <p className="cursor-pointer hover:text-black">Orders</p>
            <p className="cursor-pointer hover:text-black">Logout</p>
          </div>
        </div>
      </div>
    {/* CART ICON NAV*/}
      <Link to="/cart" className="relative">
        <img
          src={assets.cart_icon}
          alt="cart"
          className="w-5 min-w-5 cursor-pointer"
        />
        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square text-[8px] rounded-full">
          {getCartCount()}
        </p>
      </Link>
      <img
        src={assets.menu_icon}
        className="w-5 cursor-pointer md:hidden"
        onClick={() => setShowSidebar(true)}
      />
    </div>
  );
}
