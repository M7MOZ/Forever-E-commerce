/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function MobileNavigation({ setShowSidebar }) {
  return (
    <nav
      className={`absolute top-0 left-0 bottom-0 w-full transition-al bg-white overflow-hidden showSidebar ? "w-full" : "w-0"
        }`}
    >
      <div
        className="flex items-center gap-3 p-3 cursor-pointer border"
        onClick={() => setShowSidebar(false)}
      >
        <img src={assets.dropdown_icon} className="h-4 rotate-180" />
        <span>back</span>
      </div>
      <ul className="flex flex-col text-gray-700">
        <li className="w-full border px-8 py-2">
          <NavLink to="/" end onClick={() => setShowSidebar(false)}>
            <span>HOME</span>
          </NavLink>
        </li>
        <li className="w-full border px-8 py-2">
          <NavLink to="/collection" onClick={() => setShowSidebar(false)}>
            <span>COLLECTION</span>
          </NavLink>
        </li>
        <li className="w-full border px-8 py-2">
          <NavLink to="/about" onClick={() => setShowSidebar(false)}>
            <span>ABOUT</span>
          </NavLink>
        </li>
        <li className="w-full border px-8 py-2">
          <NavLink to="/contact" onClick={() => setShowSidebar(false)}>
            <span>CONTACT</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
