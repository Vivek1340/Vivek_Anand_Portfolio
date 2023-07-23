import { BrowserRouter } from "react-router-dom"

import {About , Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Feedbacks} from './components'
import Achievements from "./components/Achievements"
import Footer from "./components/Footer"
import HeroMobile from "./components/HeroMobile"

const App = () =>{
  const isMobile = window.innerWidth <= 768;

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          {/* <HeroMobile /> */}
          {isMobile ? 
          <HeroMobile />
          :
          <Hero />
          }
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Achievements />
        {/* <Feedbacks /> */}
      
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    
    </BrowserRouter>
  )
}

export default App
