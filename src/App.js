import Connect from './components/Connect';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import LangCarousel from './components/LangCarousel';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MyWork />
      <LangCarousel/>
      <Connect/>
      <Footer/>
    </>
  );
}

export default App;
