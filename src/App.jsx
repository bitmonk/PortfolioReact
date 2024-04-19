import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'

function App() {
  return (
    <>
   <Navbar />
   <Hero />
   <Work />
   <Skills />
   <About />
   <Contact />
   <Footer />
    </>
  )
}

export default App
