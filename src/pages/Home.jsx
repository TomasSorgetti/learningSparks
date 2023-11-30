import React from 'react'
import i18n from "i18next";
import About from '../components/About/About';
import Clases from '../components/Clases/Clases';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';





const Home = ({t, i18n}) => {
    
    
  return (
    <div>
      <Navigation t={t} i18n={i18n} />
      <Header t={t} />
      <Clases t={t} />
      <About t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}

export default Home