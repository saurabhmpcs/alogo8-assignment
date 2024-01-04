import "./App.css";
import InfoCard from "./InfoCard";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="flex flex-row gap-2 ">
      <Sidebar />
      <InfoCard />
    </div>
  );
}

export default App;
