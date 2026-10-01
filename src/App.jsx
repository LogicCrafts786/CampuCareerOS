import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import CareerResources from './pages/CareerResources'
import Events from './pages/Events'
import Alumni from './pages/Alumni'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/career-resources" element={<CareerResources />} />
            <Route path="/events" element={<Events />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
