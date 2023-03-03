import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import LoadingBar from 'react-top-loading-bar'
import Connect from './components/Connect';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import LangCarousel from './components/LangCarousel';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Visitor from './components/Visitor';
import Astro from '../src/assets/astro.png'
import About from './components/About';
import AlertState from './context/alert/AlertState';
import FormState from '../src/context/form/FormState'


function App() {
  return (
    <>
      <Router>
        <AlertState>
          <Header />
        </AlertState>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <HeroSection imgContent={Astro} />
              <MyWork />
              <LangCarousel />
              <FormState>
                <Connect />
              </FormState>
              <Visitor />
            </>
          } />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={
            <FormState>
              <Connect/>
            </FormState>
          } />

          <Route path='/services' element={
            <Services />
          } />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
