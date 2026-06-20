import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Quote from './components/Quote'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Careers from './pages/Careers'
import FloatingButtons from './components/FloatingButtons'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <FAQ />
      <Quote />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
