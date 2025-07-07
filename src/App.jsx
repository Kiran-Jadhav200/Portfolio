import LogoSection from "./components/LogoSection";
import Navbar from "./components/NavBar";
import FeatureCards from "./constants/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import Hero from "./sections/Hero";
import AppShowcase from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <AppShowcase/>
   <LogoSection/>
   <FeatureCards/>
   <ExperienceSection/>
   <TechStack/>
   <Contact />
   <Footer />
   </>
  );
}

export default App