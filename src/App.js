import Connect from './components/Connect';
import HeroSection from './components/HeroSection';
import Languages from './components/Languages';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MyWork />
      <Languages/>
      <Connect/>
    </>
  );
}

export default App;
