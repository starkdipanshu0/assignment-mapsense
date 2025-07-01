import { useState } from "react";
import {
  BiFont,
  BiPlus,
  BiRadioCircle,
  BiSquare,
  BiUser,
  BiMenu,
} from "react-icons/bi";
import logo from "./../../public/OIP.jpg";

const TopBar = ({
  onToggleLeft,
  onToggleRight,
}: {
  onToggleLeft: () => void;
  onToggleRight: () => void;
}) => {
  return (
    <>
      {/* Main TopBar */}
      <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-50">
        {/* Left toggle and logo */}
        <div className="flex items-center gap-4">
          <button
            className="block md:hidden p-2 hover:bg-gray-200 rounded"
            onClick={onToggleLeft}
          >
            <BiMenu className="text-xl" />
          </button>
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 border rounded-full"
          />
          <span className="text-gray-800 text-xl font-semibold border-l-2 pl-4">
            Untitled
          </span>
        </div>

        {/* Right side icons and share */}
        <div className="flex items-center gap-4 text-xl">
          {/* Icon buttons for md+ */}
          <div className="hidden md:flex gap-4">
            <button className="p-2 hover:bg-gray-200 rounded">
              <BiPlus />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded">
              <BiRadioCircle />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded">
              <BiFont />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded">
              <BiSquare />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded">
              <BiUser />
            </button>
          </div>

          <button className="text-sm font-semibold border border-black bg-gray-200 px-5 py-2 rounded-md hover:bg-gray-300 transition">
            Share
          </button>

          {/* Right toggle for small screens */}
          <button
            className="block md:hidden p-2 hover:bg-gray-200 rounded"
            onClick={onToggleRight}
          >
            <BiMenu className="text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile-only icon row (second layer) */}
      <div className="md:hidden border-b bg-gray-100 text-xl px-4 py-2">
  <div className="flex justify-center gap-4">
    <button className="p-2 hover:bg-gray-200 rounded">
      <BiPlus />
    </button>
    <button className="p-2 hover:bg-gray-200 rounded">
      <BiRadioCircle />
    </button>
    <button className="p-2 hover:bg-gray-200 rounded">
      <BiFont />
    </button>
    <button className="p-2 hover:bg-gray-200 rounded">
      <BiSquare />
    </button>
    <button className="p-2 hover:bg-gray-200 rounded">
      <BiUser />
    </button>
  </div>
</div>
    </>
  );
};

export default TopBar;
