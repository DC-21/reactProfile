import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Services from './components/Services'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
   <div>
      <Header />
      <Hero/>
      <Services/>
      <Contact/>
      <Footer/>
   </div>
  )
}

export default App
