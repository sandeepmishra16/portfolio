import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

function App() {

  return (

    <div className=" bg-[#171d32] h-auto w-full overflow-hidden">
      <Header />
      <Home />
      <About />
      <Skills />
      <Education/>
      <Projects />
      <Footer />
    </div>
    
  );
}

export default App;
