import logo from "./../../public/OIP.jpg";
import { BiFont, BiPlus, BiRadioCircle, BiSquare, BiUser } from "react-icons/bi";

const TopBar = () => (
  <div className="flex items-center justify-between px-6 py-3 border-b bg-gray-50">
    
    {/* Logo and Title */}
    <div className="flex items-center gap-4">
      <img
        src={logo}
        alt="Logo"
        className="w-10 h-10 border rounded-full"
      />
      <span className="text-gray-800 text-xl font-semibold border-l-2 pl-4">Untitled</span>
    </div>

    {/* Icon Buttons */}
    <div className="flex items-center gap-4 text-xl">
      <button className="p-2 hover:bg-gray-200 rounded"><BiPlus /></button>
      <button className="p-2 hover:bg-gray-200 rounded"><BiRadioCircle /></button>
      <button className="p-2 hover:bg-gray-200 rounded"><BiFont /></button>
      <button className="p-2 hover:bg-gray-200 rounded"><BiSquare /></button>
      <button className="p-2 hover:bg-gray-200 rounded"><BiUser /></button>

      {/* Share Button */}
      <button className="text-sm font-semibold border border-black bg-gray-200 px-5 py-2 rounded-md hover:bg-gray-300 transition">
        Share
      </button>
    </div>
  </div>
);

export default TopBar;
