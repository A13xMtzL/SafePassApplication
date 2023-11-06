// (c) URJC - Safe Pass 2023, rights reserved.

import { useCallback, useEffect, useState } from 'react'

export default function PasswordChecker() {
  const [password, setPassword] = useState('')
  const [passwordStrength, setPasswordStrength] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    const checkPasswordStrength = () => {
      const hasUppercase = /[A-Z]/.test(password)
      const hasLowercase = /[a-z]/.test(password)
      const hasDigit = /\d/.test(password)
      const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)
      const length = password.length


      if (
        (hasUppercase &&
        hasLowercase &&
        hasDigit &&
        hasSpecialChar && 
        length >= 13) ||
        (hasUppercase &&
        hasLowercase &&
        hasDigit &&
        length >= 14) ||
        (hasUppercase &&
        hasLowercase &&
        length >= 15) ||
        ((hasUppercase ||
        hasLowercase ||
        hasSpecialChar) &&
        length >= 18) ||
        (hasDigit &&
        length >= 20)
      ) {
        setPasswordStrength('Fuerte')
      } else if (
        (hasUppercase &&
        hasLowercase &&
        hasDigit &&
        hasSpecialChar && 
        length >= 9) ||
        (hasUppercase &&
        hasLowercase &&
        hasDigit &&
        length >= 10) ||
        (hasUppercase &&
        hasLowercase &&
        length >= 11) ||
        ((hasUppercase ||
        hasLowercase ||
        hasSpecialChar) &&
        length >= 12) ||
        (hasDigit &&
        length >= 16)
      ) {
        setPasswordStrength('Media')
      } else {
        setPasswordStrength('Débil')
      }
    }

    if (password.length > 0) {
      checkPasswordStrength()
    } else {
      setPasswordStrength('')
    }
  }, [password])

  const getBarColor = useCallback(() => {
    switch (passwordStrength) {
      case 'Fuerte':
        return 'bg-green-600'
      case 'Media':
        return 'bg-orange-600'
      case 'Débil':
      default:
        return 'bg-red-600'
    }
  }, [passwordStrength])

  const getBarLength = useCallback(() => {
    switch (passwordStrength) {
      case 'Fuerte':
        return 'w-[70%]'
      case 'Media':
        return 'w-[60%]'
      case 'Débil':
      default:
        return 'w-[40%]'
    }
  }, [passwordStrength])

  return (
    <div className=" p-6 font-mono ">
      {/* <div className="ml-2 rounded bg-gray-300 p-2 text-black hover:bg-gray-400"> */}
      <h1 className="m-2  text-3xl font-semibold text-slate-400">
        Validador de seguridad <br /> de contraseñas
      </h1>
      <input
        type={showPassword ? 'text' : 'password'}
        className="my-3 w-full rounded border border-teal-600 p-3 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-700"
        placeholder="Introduce tu contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="off"
      />
      <button
        className="ml-2 mt-3 rounded bg-teal-600  p-2  text-black shadow-lg transition duration-300 ease-in-out hover:scale-x-105 hover:bg-teal-700  active:scale-x-100"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? 'Ocultar' : 'Mostrar'} Contraseña
      </button>
      {passwordStrength && password.length > 0 && (
        <div className=" flex w-full items-center justify-center ">
          <div
            className={`mt-4 items-center justify-center rounded p-2 ${getBarColor()} ${getBarLength()}`}
          >
            <p>{passwordStrength}</p>
          </div>
        </div>
      )}
    </div>
    // </div>
  )
}
