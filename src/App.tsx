import Hero from "./components/Hero/Hero"
import Footer from "./components/Hero/components/Footer/Footer"
import MainInfo from "./components/Hero/components/MainInfo/MainInfo"

function App() {
  return (
    <Hero>
      <div className="left">
        <MainInfo/>
        <Footer/>
      </div>
    </Hero>
  )
}

export default App