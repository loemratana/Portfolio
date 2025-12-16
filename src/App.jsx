import { useState } from 'react'
import './App.css'
import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import Projects from './components/sections/Projects.jsx'
import About from './components/sections/About.jsx' 
import Experience from './components/sections/Experience.jsx'
import Skills from './components/sections/Skills.jsx'
import Contact from './components/sections/Contact.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="min-h-screen bg-black text-white overflow-hidden">
    {/* Animated Background */}
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div> */}

    <Navbar />
    <Hero />
    <Projects />
    <About />
    <Experience />
    <Skills />
    <Testimonials />
    <Contact/>
    
   </div>
  )
}

export default App
