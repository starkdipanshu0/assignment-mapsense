import { useState } from "react";



const LeftSidebar = () => {
    const [activeTab, setActiveTab] = useState("Layers");
    const [activeTab2, setActiveTab2] = useState("Option");
    const [noOfPages, setNoOfPages] = useState(1);
    const handlePage = () => {
        setNoOfPages(noOfPages + 1);
    }

    return (
        <div className="w-64 border-r  grid grid-cols-3 h-full">
            {/* Tab buttons */}
            <div className="col-span-2 h-full">
                <div className="grid grid-cols-2 gap-0 mb-2">
                    <button
                        className={`w-full py-2 border-b-2 text-sm ${activeTab === "Layers" ? "border-b-black  " : ""
                            }
                        }`}
                        onClick={() => setActiveTab("Layers")}
                    >
                        Layers
                    </button>
                    <button
                        className={`w-full py-2 border-b-2 text-sm ${activeTab === "Assets" ? "border-b-black" : ""
                            }
                        }`}
                        onClick={() => setActiveTab("Assets")}
                    >
                        Assets
                    </button>

                </div>

                {/* Tab Content */}

                <div className="col-span-2 h-60 overflow-hidden flex flex-col">

                    {activeTab === "Layers" && (
                        <div className="flex flex-col h-full">

                            {/* Add Page Button */}
                            <button
                                onClick={handlePage}
                                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-300 transition border-b"
                            >
                                Page
                                <span className="text-lg font-bold">+</span>
                            </button>

                            {/* Page List Scrollable */}
                            <div className="flex-1 overflow-y-auto">
                                {Array.from({ length: noOfPages }, (_, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 border-b hover:bg-gray-200 cursor-pointer"
                                    >
                                        Page {index + 1}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "Assets" && (
                        <div className="flex-1 overflow-y-auto text-sm px-4 py-2">
                            Asset Library here
                        </div>
                    )}
                </div>




                <div>
                    <div className="grid grid-cols-2 gap-0 mb-2">
                        <button
                            className={`w-full py-2 border-y-2 border-r-2 text-sm ${activeTab2 === "Option" ? "bg-gray-300  " : ""
                                }
                        }`}
                            onClick={() => setActiveTab2("Option")}
                        >
                            Option
                        </button>
                        <button
                            className={`w-full py-2 border-y-2 text-sm ${activeTab2 === "Option3" ? "bg-gray-300" : ""
                                }
                        }`}
                            onClick={() => setActiveTab2("Option3")}
                        >
                            Option3
                        </button>
                    </div>

                    {/* Tab Content */}

                    <div className="col-span-2  flex flex-col">
                        {activeTab2 === "Option" && <div className="p-2">
                            <div className="grid grid-cols-2 gap-2 m-2">
                                <div>
                                    <div className="h-24 w-full bg-gray-500">

                                    </div>
                                    <span className="text-sm">Color Style</span>


                                </div>
                                <div>
                                    <div className="h-24 w-full bg-gray-500">

                                    </div>
                                    <span className="text-sm">Component</span>


                                </div>
                            </div>
                            <div className="flex flex-col gap-2 text-sm text-gray-800 m-2">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="options" value="1" className="accent-blue-500" />
                                    Option 1
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="options" value="2" className="accent-blue-500" />
                                    Option 2
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="options" value="3" className="accent-blue-500" />
                                    Option 3
                                </label>
                            </div>


                        </div>}
                        {activeTab === "Option3" && <div>🧩 Asset Library here</div>}
                    </div>

                </div>
            </div>
            <div className="h-full border-l-2">
                <button
                    className={`w-full py-2 border-b-2 text-sm 
                        }`}
                    onClick={() => setActiveTab("Design")}
                >
                    Design
                </button>
                <div className="col-span-1 flex flex-col   overflow-x-clip">🎨 Design Tools here</div>

            </div>
        </div>
    );
};

export default LeftSidebar;
