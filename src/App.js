import Connect from './components/Connect';
import HeroSection from './components/HeroSection';
import LangCarousel from './components/LangCarousel';
import Languages from './components/Languages';
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
    </>
  );
}

export default App;
