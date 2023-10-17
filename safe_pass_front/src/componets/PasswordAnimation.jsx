// (c) URJC - Safe Pass 2023, rights reserved.

import { useEffect, useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export default function PasswordAnimation(props) {
  const [text, count] = useTypewriter({
    words: [`${props.password}`],
    delaySpeed: 50,
    loop: 1,
  })

  const [keyCount, setKeyCount] = useState(0)

  useEffect(() => {
    setKeyCount((prevCount) => prevCount + 1)
  }, [props.password])

  return (
    <div>
      <h1 className="mt-10 text-2xl text-sky-500">
        Tu contraseña generada es:
      </h1>
      <br />
      <span
        key={keyCount}
        className="text-xl font-semibold mr-3 text-teal-600 "
      >
        {text}
        <Cursor cursorBlinking={true} cursorColor="#0D9488" />
      </span>
    </div>
  )
}
