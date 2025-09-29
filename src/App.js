import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Offer from "./sections/Offer";
import Instructors from "./sections/Instructors";
import Statute from "./sections/Statute";
import Gallery from "./sections/Gallery";
import Locations from "./sections/Locations";
import Pricelist from "./sections/Pricelist";

import "./styles/global.scss";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Instructors />
      <Gallery />
      <Locations />
    </div>
  );
}

export default App;
