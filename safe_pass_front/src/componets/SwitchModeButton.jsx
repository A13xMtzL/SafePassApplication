// (c) URJC - Safe Pass 2023, rights reserved.

import { useCallback, useEffect, useState } from 'react'

export default function SwitchModeButton() {
  const [darkMode, setDarkMode] = useState(false) // state variable to track current mode

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevMode) => !prevMode) // function to toggle mode
  }, [])

  useEffect(() => {
    const body = document.querySelector('body')
    body.classList.toggle('dark', darkMode) // add 'dark' class to body element based on mode
  }, [darkMode])

  return (
    <button
      onClick={toggleDarkMode}
      className={`text-sm font-medium ${
        darkMode ? 'text-white' : 'text-gray-900'
      } focus:outline-none`}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
