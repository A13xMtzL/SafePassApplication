// (c) URJC - Safe Pass 2023, rights reserved.

import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { BsFillClipboardFill } from 'react-icons/bs'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

PasswordAnimation.propTypes = {
  password: PropTypes.string.isRequired,
}

export default function PasswordAnimation({ password }) {
  const [generatedPassword] = useTypewriter({
    words: [password],
    delaySpeed: 50,
    loop: 1,
  })

  const [isCopied, setIsCopied] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isCopied) {
      const timeoutId = setTimeout(() => {
        setIsCopied(false)
      }, 2000)
      return () => clearTimeout(timeoutId)
    }
  }, [isCopied])

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    setIsCopied(true)
  }

  const copyButtonClasses = classNames(
    'absolute right-0 top-0 text-gray-400 transition duration-300 ease-in-out hover:scale-x-105 hover:text-gray-500 focus:outline-none active:scale-x-100',
    {
      'hover:border-yellow-800 hover:shadow-lg': !isCopied,
      'text-green-600': isCopied,
    },
  )

  return (
    <div className="">
      <h1 className="mb-5 mt-10 text-2xl text-sky-500">
        Tu contraseña generada es:
      </h1>
      <div className="relative max-w-sm items-center justify-center rounded-md border border-transparent hover:border-yellow-800">
        <span className="mr-3 text-xl font-semibold text-teal-600">
          {generatedPassword}
          <Cursor cursorBlinking={true} cursorColor="#0D9488" />
        </span>
        <BsFillClipboardFill
          alt="Copy to clipboard"
          title="Copiar al portapapeles"
          size={20}
          className={copyButtonClasses}
          onClick={handleCopy}
        />
      </div>
      {isCopied && (
        <p className="animate-fade-in items-center justify-center text-green-600">
          ¡Copiado al portapapeles!
        </p>
      )}
    </div>
  )
}
