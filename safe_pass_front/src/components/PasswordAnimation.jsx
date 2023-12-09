// (c) URJC - Safe Pass 2023, rights reserved.

import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BsFillClipboardFill } from 'react-icons/bs'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

PasswordAnimation.propTypes = {
  password: PropTypes.string.isRequired,
}

export default function PasswordAnimation({ password }) {
  const { t } = useTranslation('global')
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
    'text-gray-400 mt-3 ml-5 transition duration-300 ease-in-out hover:scale-x-105 hover:text-gray-500 focus:outline-none active:scale-x-100',
    {
      'hover:border-yellow-800 hover:shadow-lg': !isCopied,
      'text-green-600': isCopied,
    },
  )

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <h1 className="mb-3 text-2xl text-sky-500">
          {t('password-animation.title')}
        </h1>
        <BsFillClipboardFill
          alt="Copy to clipboard"
          title="Copiar al portapapeles"
          size={30}
          className={copyButtonClasses}
          onClick={handleCopy}
        />
      </div>
      <div className="flex max-w-sm items-center justify-center rounded-md border border-transparent hover:border-yellow-800">
        <span className="mr-3 text-xl font-semibold text-teal-600">
          {generatedPassword}
          <Cursor cursorBlinking={true} cursorColor="#0D9488" />
        </span>
      </div>
      {isCopied && (
        <p className="animate-fade-in mt-3 items-center justify-center text-green-600">
          {t('password-animation.copied')}
        </p>
      )}
    </div>
  )
}
