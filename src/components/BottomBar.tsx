const BottomBar = () => (
  <div className="flex items-center justify-between px-4 py-2 border-t text-sm bg-gray-50">
    {/* Zoom indicator or control */}
    <div className="text-gray-700 font-medium">100%</div>

    {/* Position Controls */}
    <div className="flex items-center gap-4">
      {/* X Position */}
      <div className="flex items-center gap-1">
        <label htmlFor="bottom-x" className="text-gray-600">X</label>
        <input
          id="bottom-x"
          type="number"
          className="border border-gray-300 p-1 w-16 rounded"
        />
      </div>

      {/* Y Position */}
      <div className="flex items-center gap-1">
        <label htmlFor="bottom-y" className="text-gray-600">Y</label>
        <input
          id="bottom-y"
          type="number"
          className="border border-gray-300 p-1 w-16 rounded"
        />
      </div>

      {/* Scale Dropdown */}
      <select className="border border-gray-300 p-1 rounded">
        <option>Scale</option>
        <option>25%</option>
        <option>50%</option>
        <option>100%</option>
        <option>200%</option>
      </select>
    </div>
  </div>
);

export default BottomBar;
