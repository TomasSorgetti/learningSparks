import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Clases from "./components/Clases/Clases";
import About from "./components/About/About";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Clases />
      <About/>
    </div>
  );
}

export default App;
