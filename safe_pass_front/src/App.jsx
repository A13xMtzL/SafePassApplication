// (c) URJC - Safe Pass 2023, rights reserved.

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import BackgroundCircles from './componets/BackgroundCircles'
import NavBar from './componets/NavBar'
import SwitchModeButton from './componets/SwitchModeButton'
import CheckLeaked from './pages/CheckLeaked'
import Generator from './pages/Generator'
import Home from './pages/Home'
import Validator from './pages/Validator'

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center ">
          <BackgroundCircles />
          <SwitchModeButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/validator" element={<Validator />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/leaked" element={<CheckLeaked />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}
