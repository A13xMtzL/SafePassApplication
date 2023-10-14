// (c) URJC - Safe Pass 2023, rights reserved.
import { useCallback, useState } from 'react'

export default function Generator() {
  const [options, setOptions] = useState({
    length: 12,
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
  })

  const generatePassword = useCallback(() => {
    // TODO: fetch to backend and show the password
    fetch('http://localhost:5000/api/generator', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
  }, [options])

  const handleOptionChange = useCallback((event) => {
    const { name, checked } = event.target
    setOptions((prevOptions) => ({
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
      <h2 className="text-3xl text-slate-400">Generar contraseña segura</h2>
      <form className="m-4" onSubmit={handleSubmit}>
        <div className="mb-2 flex items-center">
          <label htmlFor="length" className="mr-2">
            Longitud:
          </label>
          <input
            type="number"
            id="length"
            className="w-16 rounded border border-teal-600 p-2"
            min="6"
            max="50"
            value={options.length}
            onChange={(e) =>
              setOptions((prevOptions) => ({
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
            checked={options.lowercase}
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
            checked={options.uppercase}
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
            checked={options.numbers}
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
            checked={options.symbols}
            onChange={handleOptionChange}
          />
          <label htmlFor="symbols">Símbolos</label>
        </div>
        <button
          type="submit"
          id="submit"
          className="ml-3 rounded bg-yellow-800 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:scale-x-105 hover:bg-yellow-900 active:scale-x-100"
        >
          Generar contraseña
        </button>
      </form>
    </div>
  )
}
