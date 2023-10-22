// (c) URJC - Safe Pass 2023, rights reserved.

import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { BsFillClipboardFill } from 'react-icons/bs'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

PasswordAnimation.propTypes = {
  password: PropTypes.string.isRequired,
}
export default function PasswordAnimation(props) {
  // Password animation
  const [text, count] = useTypewriter({
    words: [`${props.password}`],
    delaySpeed: 50,
    loop: 1,
  })

  // Copy to clipboard
  const [keyCount, setKeyCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    setKeyCount((prevCount) => prevCount + 1)
  }, [props.password])

  const handleCopy = () => {
    navigator.clipboard.writeText(props.password)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <div className="">
      <h1 className="mb-5 mt-10 text-2xl text-sky-500">
        Tu contraseña generada es:
      </h1>
      <div
        className="relative  max-w-sm items-center justify-center rounded-md border border-transparent hover:border-yellow-800 hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          key={keyCount}
          className="mr-3 text-xl font-semibold text-teal-600"
        >
          {text}
          <Cursor cursorBlinking={true} cursorColor="#0D9488" />
        </span>
        {isHovered && (
          <BsFillClipboardFill
            alt="Copy to clipboard"
            title="Copy to clipboard"
            size={20}
            className="absolute right-0 top-0 text-gray-400 transition duration-300 ease-in-out hover:scale-x-105 hover:text-gray-500 focus:outline-none active:scale-x-100"
            onClick={handleCopy}
          ></BsFillClipboardFill>
        )}
      </div>
      {isCopied && (
        <p className="items-center justify-center text-green-600 animate-fade-in">
          Copied to clipboard!
        </p>
      )}
    </div>
  )
}
