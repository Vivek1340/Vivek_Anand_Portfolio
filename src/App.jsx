import { BrowserRouter } from "react-router-dom"

import {About , Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Feedbacks} from './components'
import Achievements from "./components/Achievements"

const App = () =>{


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero />
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
      </div>
    
    </BrowserRouter>
  )
}

export default App
