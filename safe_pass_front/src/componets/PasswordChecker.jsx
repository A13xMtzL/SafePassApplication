// (c) URJC - Safe Pass 2023, rights reserved.

import classNames from 'classnames'
import { useCallback, useEffect, useState } from 'react'

export default function PasswordChecker() {
  const [password, setPassword] = useState('')
  const [passwordStrength, setPasswordStrength] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const checkPasswordStrength = useCallback(() => {
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
      (hasUppercase && hasLowercase && hasDigit && length >= 14) ||
      (hasUppercase && hasLowercase && length >= 15) ||
      ((hasUppercase || hasLowercase || hasSpecialChar) && length >= 18) ||
      (hasDigit && length >= 20)
    ) {
      setPasswordStrength('Fuerte')
    } else if (
      (hasUppercase &&
        hasLowercase &&
        hasDigit &&
        hasSpecialChar &&
        length >= 9) ||
      (hasUppercase && hasLowercase && hasDigit && length >= 10) ||
      (hasUppercase && hasLowercase && length >= 11) ||
      ((hasUppercase || hasLowercase || hasSpecialChar) && length >= 12) ||
      (hasDigit && length >= 16)
    ) {
      setPasswordStrength('Media')
    } else {
      setPasswordStrength('Débil')
    }
  }, [password])

  useEffect(() => {
    if (password.length > 0) {
      checkPasswordStrength()
    } else {
      setPasswordStrength('')
    }
  }, [password, checkPasswordStrength])

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

  const passwordStrengthClasses = classNames(
    'mt-4 text-white dark:text-black shadow shadow-lg items-center justify-center rounded p-2 transition',
    getBarColor(),
    getBarLength(),
  )

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const passwordInputType = showPassword ? 'text' : 'password'

  return (
    <div className="css-glow rounded-lg bg-[#ffbc2d11] p-6 font-mono dark:bg-[#2dffc310]">
      <h1 className="m-2 text-3xl font-semibold text-slate-800 dark:text-slate-300">
        Validador de seguridad <br /> de contraseñas
      </h1>
      <input
        type={passwordInputType}
        className="my-3 w-full rounded border border-teal-600 bg-slate-50 p-3 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-700 dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white"
        placeholder="Introduce tu contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="off"
      />
      <button
        className="ml-2 mt-3 rounded bg-teal-700 p-2 text-gray-50 shadow-lg transition duration-300 ease-in-out hover:scale-x-105 hover:bg-teal-800 active:scale-x-100 dark:bg-teal-600 dark:text-gray-900 dark:hover:bg-teal-700"
        onClick={togglePasswordVisibility}
        title={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
        aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
      >
        {showPassword ? 'Ocultar' : 'Mostrar'} Contraseña
      </button>
      {passwordStrength && password.length > 0 && (
        <div className="flex items-center justify-center">
          <div
            className={passwordStrengthClasses}
            role="status"
            aria-live="polite"
          >
            <p>{passwordStrength}</p>
          </div>
        </div>
      )}
    </div>
  )
}
