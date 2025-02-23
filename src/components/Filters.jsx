/* eslint-disable react/prop-types */
import { useState } from "react";
// import { MdKeyboardArrowRight } from "react-icons/md";

export default function Filters(props) {
  const [showFilter, setShowFilter] = useState(true);
  return (
    <div className="">
      <div className="flex items-center mb-7">
        <h1 className="text-2xl">FILTERS</h1>
        {/* <MdKeyboardArrowRight
          className="text-2xl block md:hidden cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
        /> */}
      </div>
      {/*filters body*/}
      <div className={`w-full md:w-60 ${showFilter ? "" : "hidden"} md:block`}>
        <div className="border border-gray-300 p-3 mb-5">
          <p className="mb-3 font-medium">CATEGORIES</p>
          <ul className="flex flex-col gap-2">
            <li>
              <input
                type="checkbox"
                className="mr-2"
                value={"Men"}
                onChange={props.toggleCategory}
              />
              <label className="text-gray-500">Men</label>
            </li>
            <li>
              <input
                type="checkbox"
                className="mr-2"
                value={"Women"}
                onChange={props.toggleCategory}
              />
              <label className="text-gray-500">Women</label>
            </li>
            <li>
              <input
                type="checkbox"
                className="mr-2"
                value={"Kids"}
                onChange={props.toggleCategory}
              />
              <label className="text-gray-500">Kids</label>
            </li>
          </ul>
        </div>
        <div className="border border-gray-300 p-3">
          <p className="mb-3 font-medium">TYPE</p>
          <ul className="flex flex-col gap-2">
            <li className="">
              <input
                type="checkbox"
                className="mr-2"
                value={"Topwear"}
                onChange={props.toggleSubCategory}
              />
              <label className="text-gray-500">Topwear</label>
            </li>
            <li>
              <input
                type="checkbox"
                className="mr-2"
                value={"Bottomwear"}
                onChange={props.toggleSubCategory}
              />
              <label className="text-gray-500">Bottomwear</label>
            </li>
            <li>
              <input
                type="checkbox"
                className="mr-2"
                value={"Winterwear"}
                onChange={props.toggleSubCategory}
              />
              <label className="text-gray-500">Winterwear</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
