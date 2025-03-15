import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Amenities from "./components/Amenities";
import SpaceView from "./components/SpaceView";

function App() {
  return (
    <div className="center col-12 mx-auto">
      <Header />
      <Banner />
      <Amenities />
      <SpaceView />
    </div>
  );
}

export default App;
