import './App.css';
import { useState } from 'react';
import BottomBar from './components/BottomBar';
import CanvasArea from './components/CanvasArea';
import LeftSidebar from './components/LeftSidebar';
import RightPanel from './components/RightPanel';
import TopBar from './components/TopBar';

export default function App() {
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [showRightPanel, setShowRightPanel] = useState(false);


  return (
    <div className="h-screen flex flex-col border-2 border-gray-400 rounded-lg overflow-x-hidden">
      <TopBar
        onToggleLeft={() => {
          setShowLeftSidebar(prev => !prev);
          setShowRightPanel(false);
        }}

        onToggleRight={() => {
          setShowRightPanel(prev => !prev);
          setShowLeftSidebar(false);
        }}
      />

      <div className="flex flex-1 relative">
        {/* Left Sidebar */}
        <div
          className={`bg-white w-64 border-r p-2 z-10 absolute md:static top-0 bottom-0 left-0 transition-transform duration-300 ${showLeftSidebar ? 'translate-x-0' : '-translate-x-full'
            } md:translate-x-0`}
        >
          <LeftSidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col flex-1">
          <div className="flex flex-1 ">
            <CanvasArea />

            {/* Right Panel */}
            <div
              className={`bg-white w-64 border-l p-2 z-10 absolute md:static top-0 bottom-0 right-0 transition-transform duration-300 ${showRightPanel ? 'translate-x-0' : 'translate-x-full'
                } md:translate-x-0`}
            >
              <RightPanel />
            </div>
          </div>

          <BottomBar />
        </div>
      </div>
    </div>
  );
}
