import Hero from "./components/Hero/Hero"
import Footer from "./components/Hero/components/Footer/Footer"
import MainInfo from "./components/Hero/components/MainInfo/MainInfo"
import HeroImage from './assets/images/img-main.png';
import Circles from "./assets/icons/Circles/Circles";
import Square from "./assets/icons/Square/square";

function App() {
  return (
    <Hero>
      <div className="left">
        <MainInfo/>
        <Footer/>
      </div>
      <div className="right">
        <Circles/>
        <img src={HeroImage} alt="hero-image" />
        <Square/>
      </div>
    </Hero>
  )
}

export default App