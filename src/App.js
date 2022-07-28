import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Features />
      <Pricing/>
      <Testimonials />
      <Footer/>
    </>
  );
}

export default App;
