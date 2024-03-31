import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Components/Header'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Gallery from './Components/Gallery'
import MenuResponsive from './Components/MenuResponsive'
import Projects from './Components/Projects'
import Footer from './Components/Footer'

function App() {


  return (
    <>
    <Header />

    <main className='w-full'>
      <Home />
      <AboutMe />
      <Gallery />
      <Projects />
      <Footer />
    </main>
    
    
    </>
  )
}

export default App
