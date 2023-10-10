// (c) URJC - Safe Pass 2023, rights reserved.

import { useEffect, useState } from 'react'
import './App.css'
// import reactLogo from './assets/react.svg'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import BackgroundCircles from './componets/BackgroundCircles'
import NavBar from './componets/NavBar'
import Home from './pages/Home'
import Validator from './pages/Validator'
// import viteLogo from '/vite.svg'

export default function App() {
  const [count, setCount] = useState(0)

  // ! useEffect(() => {
  // !   fetch('http://localhost:5000/members').then((response) => {
  // !     return response.json()
  // !   })
  // ! }, [])
  // getHello()

  // return (
  //   <>
  //     <Router>
  //       {/* <NavBar /> */}
  //       <div className="">
  //         {Switch /* <BackgroundCircles /> */}
  //         <Switch>
  //           <Route path="/" element={<Home />} />
  //           <Route path="/validator" element={<Validator />} />
  //         </Switch>
  //       </div>
  //     </Router>
  //   </>
  // )
  return (
    <>
      <Validator />
    </>
  )
}
