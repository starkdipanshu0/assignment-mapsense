const RightPanel = () => (
  <div className="w-62  p-3 text-sm">
    <div className="text-left border-b mb-3">
  <h2 className="text-lg font-semibold mb-2">Properties</h2>
</div>
    {/* X, Y, W, H Grid */}
    <div className="grid grid-cols-2 gap-2 mb-3">
      <div className="flex items-center gap-1">
        <label htmlFor="x" className="w-4">X</label>
        <input id="x" className="border p-1 w-full" />
      </div>
      <div className="flex items-center gap-1">
        <label htmlFor="y" className="w-4">Y</label>
        <input id="y" className="border p-1 w-full" />
      </div>
      <div className="flex items-center gap-1">
        <label htmlFor="w" className="w-4">W</label>
        <input id="w" className="border p-1 w-full" />
      </div>
      <div className="flex items-center gap-1">
        <label htmlFor="h" className="w-4">H</label>
        <input id="h" className="border p-1 w-full" />
      </div>
    </div>

    {/* Fill */}
    <div className="flex  items-center gap-2 mb-2">
      <label htmlFor="fill" className="w-6">Fill</label>
      <input id="fill" className="border p-1 flex-1 w-full" />
    </div>

    {/* Stroke */}
    <div className="flex items-center gap-2">
      <label htmlFor="stroke" className="w-12">Stroke</label>
      <input id="stroke" className="border p-1 flex-1" />
    </div>
  </div>
);

export default RightPanel;
