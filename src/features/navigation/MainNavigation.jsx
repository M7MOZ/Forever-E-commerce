/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import SecondaryNavigation from "./SecondaryNavigation";
import { assets } from "../../assets/assets";
export default function MainNavigation({ setShowSidebar }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-5 font-medium border-b border-gray-300">
      <img src={assets.logo} alt="logo" className="w-32 sm:w-36 md:w-44" onClick={() => navigate("/")}/>
      {/* MAIN NAVIGATION */}
      <nav>
        <ul className="hidden md:flex gap-5 text-sm text-gray-700">
          <li>
            <NavLink to="/" end className="flex flex-col items-center gap-1">
              <span>HOME</span>
              <hr className="bg-gray-700 h-[1.5px] w-2/4 border-none hidden" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collection"
              end
              className="flex flex-col items-center gap-1"
            >
              <span>COLLECTION</span>
              <hr className="bg-gray-700 h-[1.5px] w-2/4 border-none hidden" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              end
              className="flex flex-col items-center gap-1"
            >
              <span>ABOUT</span>
              <hr className="bg-gray-700 h-[1.5px] w-2/4 border-none hidden" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              end
              className="flex flex-col items-center gap-1"
            >
              <span>CONTACT</span>
              <hr className="bg-gray-700 h-[1.5px] w-2/4 border-none hidden" />
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* SECONDARY NAVIGATION */}
      <SecondaryNavigation setShowSidebar={setShowSidebar} />
    </div>
  );
}
