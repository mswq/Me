import { useState } from 'react'
import Home from './components/Home.jsx'
import './App.css'
import './Projects.css'
import './Modal.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import Layout from './components/Layout.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
