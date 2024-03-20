import React from 'react'
import About from '../components/About/About';
import Clases from '../components/Clases/Clases';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';





const Home = ({ t, i18n, country }) => {
  return (
    <div>
      <Navigation t={t} i18n={i18n} />
      <Header t={t} />
      <Clases t={t} country={country} />
      <About t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
};

export default Home