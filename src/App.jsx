import Header from "./Components/Header/Header";
import ShoeCard from "./Components/ShoeCatalogue/ShoeCard";
import ShoeCatalogue from "./Components/ShoeCatalogue/ShoeCatalogue";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <ShoeCatalogue />
      </div>
    </div>
  );
}

export default App;