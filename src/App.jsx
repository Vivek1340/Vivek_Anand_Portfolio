import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

const App = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Hero isMobile={isMobile} />
      <About />
      <Works />
      <Experience />
      <Tech />
      <Achievements />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
};

export default App;
