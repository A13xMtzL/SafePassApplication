// (c) URJC - Safe Pass 2023, rights reserved.

import { useState } from 'react'
import { FiBookOpen } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'

export default function FloatingButton() {
  const navigate = useNavigate()
  const location = useLocation()
  const [visitedGuide, setVisitedGuide] = useState(false)
  const [previousLocation, setPreviousLocation] = useState('')

  const handleClick = () => {
    if (!visitedGuide) {
      setPreviousLocation(location.pathname)
      navigate('/guide')
      setVisitedGuide(true)
    } else {
      navigate(previousLocation)
      setVisitedGuide(false)
    }
  }

  return (
    <div>
      <button
        className="fixed right-8 top-20 transform rounded-full bg-blue-500 p-4 text-white shadow-lg transition-transform hover:scale-110 hover:bg-blue-600 focus:outline-none active:scale-100"
        onClick={handleClick}
        alt="Tips for secure passwords"
        title="Tips for secure passwords"
      >
        <FiBookOpen size={30} />
      </button>
    </div>
  )
}
