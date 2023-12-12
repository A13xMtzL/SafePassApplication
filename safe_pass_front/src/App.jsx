// (c) URJC - Safe Pass 2023, rights reserved.

import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import BackgroundCircles from './components/BackgroundCircles'
import Contact from './components/Contact'
import Element404 from './components/Element404'
import FloatingButton from './components/FloatingTip'
import NavBar from './components/NavBar'
import CheckLeaked from './pages/CheckLeaked'
import Generator from './pages/Generator'
import Home from './pages/Home'
import PasswordSecurityGuide from './pages/PasswordSecurityGuide'
import Validator from './pages/Validator'

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center ">
          <BackgroundCircles />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/validator" element={<Validator />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/leaked" element={<CheckLeaked />} />
            <Route path="/guide" element={<PasswordSecurityGuide />} />
            <Route path="*" element={<Element404 />} />
          </Routes>
        </div>
        <FloatingButton />
        <Contact />
      </Router>
    </>
  )
}
