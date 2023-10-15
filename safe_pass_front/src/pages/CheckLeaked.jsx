import React, { useState } from 'react'

export default function CheckLeaked() {
  const [password, setPassword] = useState('')
  const [isLeaked, setIsLeaked] = useState(false)

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleCheckLeaked = (event) => {
    event.preventDefault()
    const requestBody = { password }
    fetch('http://localhost:8080/api/filtered', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLeaked(data)
        if (data) {
          setMessage('La contraseña ha sido filtrada!')
        } else {
          setMessage('La contraseña no ha sido filtrada!')
        }
      })
      .catch((error) => console.error(error))
  }

  const [message, setMessage] = useState('')

  return (
    <div className="font-mono">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <form
            className="mb-4 rounded px-8 pb-8 pt-6 shadow-md"
            onSubmit={handleCheckLeaked}
          >
            <div className="mb-4">
              <h1 className="m-2 mb-4 text-3xl font-semibold text-slate-400">
                Verificación de contraseñas filtradas
              </h1>
              <label
                className="mb-2 block font-bold text-gray-300"
                htmlFor="password"
              >
                Introduce tu contraseña:
              </label>
              <input
                className="focus:lime-600 w-full appearance-none rounded border border-lime-700 px-3 py-2 placeholder-gray-600 shadow focus:outline-none focus:ring-2 focus:ring-lime-700"
                id="password"
                type="password"
                value={password}
                placeholder="Password123"
                onChange={handlePasswordChange}
              />
            </div>
            <div className=" items-center justify-between">
              <button
                className="rounded bg-lime-700 px-4 py-2 font-bold text-white shadow-lg transition duration-300 ease-in-out  hover:scale-x-105 hover:bg-lime-800 active:scale-x-100"
                type="submit"
              >
                Revisar si <br />
                existen filtraciones
              </button>
              {message && (
                <div
                  className={`mt-10 rounded ${
                    isLeaked ? 'bg-red-500' : 'bg-green-700'
                  } px-4 py-2 font-bold text-white`}
                >
                  {message}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
