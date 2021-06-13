import React, {useState, useEffect} from 'react';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import Hire from './components/Hire/Hire';
import Contact from './components/Contact/Contact';
import FooterBottom from './components/FooterBottom/FooterBottom';
import BackToTop from './components/BackToTop/BackToTop';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
import './asset/css/light.css';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])


  return (
    <div className="Loader">
      {
        loading ? (
          <ClimbingBoxLoader
          size={20}
          color={"#22cd6f"}
          loading={loading}
          speedMultiplier={1}
        />
        )
        
        :

        (
          <div className="Homepage">
            <ScrollIndicator/>
            <BackToTop/>
            <Banner/>
            <About/>
            <Services/>
            <Resume/>
            <Portfolio/>
            <Hire/>
            <Contact/>
            <FooterBottom/>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
