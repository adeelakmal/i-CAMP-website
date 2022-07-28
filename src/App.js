import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Features />
      <Services/>
      <Testimonials />
      <Footer/>
    </>
  );
}

export default App;
