import { useState } from 'react'
import Navbars from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  

  return (
    <>
      <Navbars/>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>

      
    </>
  )
}

export default App
