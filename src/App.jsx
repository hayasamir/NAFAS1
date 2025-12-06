import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";   
import CardsSection from "./components/CardsSection";
import WhoWeAre from "./components/WhoWeAre";
import Footer from "./components/Footer";
import PsychologicalBage from "./pages/psychological";
import PsychologicalAudio from "./pages/psychologicalaudio"
import PsychologicalInstructions from "./pages/psychologicalinstructions";
import EDuctionalBage from "./pages/eductional";
import SociallBage from "./pages/social";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>نفس - الصفحة الرئيسية</title>
                <meta name="description" content="الصفحة الرئيسية" />
              </Helmet>
              <HomeSection />
              <CardsSection />
              <WhoWeAre />
            </>
          }
        />
        <Route
          path="Psychological"
          element={
            <>
            
              <PsychologicalBage />
            </>
          }
        />

           <Route
      path="HeroAudio"
      element={
        <>
         <PsychologicalAudio />
        </>
      }
    />

    
           <Route
      path="HeroInstructions"
      element={
        <>
         <PsychologicalInstructions />
        </>
      }
    />
    
           <Route
      path="educational"
      element={
        <>
         <EDuctionalBage />
        </>
      }
    />

       <Route
      path="social"
      element={
        <>
         <SociallBage />
        </>
      }
    />
      </Routes>

   

      <Footer />
    </>
  );
}

export default App;
