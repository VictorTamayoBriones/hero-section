import Hero from "./components/Hero/Hero"
import Footer from "./components/Hero/components/Footer/Footer"
import MainInfo from "./components/Hero/components/MainInfo/MainInfo"
import Circles from "./assets/icons/Circles/Circles";
import Square from "./assets/icons/Square/square";
import { Carousel } from "./components/Carousel";
import MainImage from "./components/Hero/components/MainImage/MainImage";

function App() {
  return (
    <Hero>
      <div className="left">
        <MainInfo/>
        <Footer/>
      </div>
      <div className="right">
        <Circles/>
        <MainImage/>
        <Square/>
        <Carousel/>
      </div>
    </Hero>
  )
}

export default App