// (c) URJC - Safe Pass 2023, rights reserved.

import { useCallback, useState } from 'react'
import PasswordAnimation from '../componets/PasswordAnimation'

export default function Generator() {
  const [generatedPassword, setGeneratedPassword] = useState('')
  const [selection, setSelection] = useState({
    length: 12,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
  })
  const selectionArray = []
  if (selection.lowercase) {
    selectionArray.push('lower')
  }
  if (selection.uppercase) {
    selectionArray.push('upper')
  }
  if (selection.numbers) {
    selectionArray.push('number')
  }
  if (selection.symbols) {
    selectionArray.push('special')
  }
  const requestBody = {
    selection: selectionArray,
    length: selection.length,
  }
  const generatePassword = useCallback(() => {
    fetch('http://localhost:8080/api/gen', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setGeneratedPassword(data.password)
      })
      .catch((error) => console.error(error))
  }, [requestBody])

  const handleOptionChange = useCallback((event) => {
    const { name, checked } = event.target
    setSelection((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }))
  }, [])

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      generatePassword()
    },
    [generatePassword],
  )

  return (
    <div className="font-mono">
      <h1 className="m-2 text-3xl font-semibold text-slate-800 dark:text-slate-300">
        Generar contraseña segura
      </h1>
      <form className="m-4" onSubmit={handleSubmit}>
        <div className="mb-2 flex items-center">
          <label htmlFor="length" className="mr-2">
            Longitud:
          </label>
          <input
            type="number"
            id="length"
            className="w-16 rounded border border-yellow-800 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-800 dark:bg-slate-900"
            min="6"
            max="50"
            value={selection.length}
            onChange={(e) =>
              setSelection((prevOptions) => ({
                ...prevOptions,
                length: parseInt(e.target.value),
              }))
            }
          />
        </div>
        <div className="mb-2 flex items-center">
          <input
            type="checkbox"
            id="lowercase"
            name="lowercase"
            className="mr-2"
            checked={selection.lowercase}
            onChange={handleOptionChange}
          />
          <label htmlFor="lowercase">Letras minúsculas</label>
        </div>
        <div className="mb-2 flex items-center">
          <input
            type="checkbox"
            id="uppercase"
            name="uppercase"
            className="mr-2"
            checked={selection.uppercase}
            onChange={handleOptionChange}
          />
          <label htmlFor="uppercase">Letras mayúsculas</label>
        </div>
        <div className="mb-2 flex items-center">
          <input
            type="checkbox"
            id="numbers"
            name="numbers"
            className="mr-2"
            checked={selection.numbers}
            onChange={handleOptionChange}
          />
          <label htmlFor="numbers">Números</label>
        </div>
        <div className="mb-2 flex items-center">
          <input
            type="checkbox"
            id="symbols"
            name="symbols"
            className="mr-2"
            checked={selection.symbols}
            onChange={handleOptionChange}
          />
          <label htmlFor="symbols">Símbolos</label>
        </div>
        <button
          type="submit"
          id="submit"
          className="ml-3 rounded bg-yellow-600 px-4 py-2 font-bold  text-white transition duration-300 ease-in-out hover:scale-x-105 hover:bg-yellow-700 active:scale-x-100 dark:bg-yellow-800 dark:hover:bg-yellow-900"
        >
          Generar contraseña
        </button>
      </form>
      {generatedPassword && (
        <div className="mt-10">
          <PasswordAnimation
            password={generatedPassword}
            key={generatedPassword}
          />
        </div>
      )}
    </div>
  )
}
