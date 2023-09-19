import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Clases from "./components/Clases/Clases";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Clases />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
