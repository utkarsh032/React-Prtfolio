import './App.css'
import Navbar from "./Pages/Navbar";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Footer from "./Pages/Footer";
import Hero from './Pages/Hero';
import Tools from './Pages/Tools';
import Contact from './Pages/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tools />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}