import React, { useState, useEffect } from 'react'
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

function App() {

  const [alert, setAlert] = useState(true)
  const showAlertMsg = () => {
    setTimeout(() => {
      setAlert(null)
    }, 5000);
  }

  useEffect(() => {
    showAlertMsg();
  }, [])


  return (
    <>
      <Router>
        <Header alert={alert} />
        <Navbar />
        <Routes>
          <Route path='/' element={
            <>
              <HeroSection />
              <MyWork />
              <LangCarousel />
              <Connect apikey={process.env.REACT_APP_POST_CONNECT_MSG} />
              <Visitor/>
            </>
          } />
          <Route path='/contact' element={
            <Connect apikey={process.env.REACT_APP_POST_CONNECT_MSG} />
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
