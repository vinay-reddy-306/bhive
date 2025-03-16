import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Amenities from "./components/Amenities";
import SpaceView from "./components/SpaceView";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";

function App() {
  return (
    <div className="center col-12 mx-auto">
      <Header />
      <Banner />
      <Amenities />
      <SpaceView />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
