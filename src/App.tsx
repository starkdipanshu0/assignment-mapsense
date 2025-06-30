
import './App.css'
import BottomBar from './components/BottomBar';
import CanvasArea from './components/CanvasArea';
import LeftSidebar from './components/LeftSideBar';
import RightPanel from './components/RightPanel';
import TopBar from './components/TopBar';
export default function App() {
  return (
    <div className="h-screen flex flex-col border-2 border-gray-400 rounded-lg">
  <TopBar />
  
  
  <div className="flex flex-1 ">
    
    <div className="h-full">
      <LeftSidebar />
    </div>

    <div className="flex flex-col flex-1 ">
      <div className="flex flex-1 ">
        <CanvasArea />
        <RightPanel />
      </div>
      <BottomBar />
    </div>

  </div>
</div>
  );
}