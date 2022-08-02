import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Mentors from "./components/Mentors";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Services />
      <Mentors />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
