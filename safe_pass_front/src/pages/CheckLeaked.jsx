// (c) URJC - Safe Pass 2023, rights reserved.

import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

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
        setIsLeaked(data.filtered)
        if (data.filtered) {
          setMessage(t('checker-component.leaked'))
        } else {
          setMessage(t('checker-component.not-leaked'))
        }
      })
      .catch((error) => console.error(error))
  }

  const [message, setMessage] = useState('')

  const { t } = useTranslation('global')
  return (
    <div className="font-mono">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <form
            className="mb-4 rounded px-8 pb-8 pt-6 "
            onSubmit={handleCheckLeaked}
          >
            <div className="mb-4">
              <h1 className="m-2 mb-4 text-3xl font-semibold text-slate-700 dark:text-slate-300">
                {t('checker-component.title')}
              </h1>
              <label
                className="mb-2 block font-bold text-gray-700 dark:text-gray-300"
                htmlFor="password"
              >
                {t('checker-component.password')}
              </label>
              <input
                className="focus:lime-600 w-full appearance-none rounded border border-lime-700 bg-slate-50 px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                id="password"
                type="password"
                value={password}
                placeholder="Password123"
                required="true"
                onChange={handlePasswordChange}
              />
            </div>
            <div className=" items-center justify-between">
              <button
                className="rounded bg-green-500 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:scale-x-105  hover:bg-green-600 active:scale-x-100 dark:bg-lime-700 dark:hover:bg-lime-800"
                type="submit"
              >
                {t('checker-component.check')} <br />
                {t('checker-component.check2')}
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
