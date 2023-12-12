// (c) URJC - Safe Pass 2023, rights reserved.

import { FiBookOpen } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function FloatingButton() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/guide')
  }

  return (
    <button
      className="fixed top-20 right-8 transform rounded-full bg-blue-500 p-4 text-white shadow-lg transition-transform hover:scale-110 hover:bg-blue-600 focus:outline-none"
      onClick={handleClick}
      alt="Tips for secure passwords"
      title="Tips for secure passwords"
    >
      <FiBookOpen size={30} />
    </button>
  )
}
