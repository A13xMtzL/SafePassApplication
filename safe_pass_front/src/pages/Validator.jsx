// (c) URJC - Safe Pass 2023, rights reserved.

import React from 'react'

export default function Validator() {
  return (
    <div>
      <h2 className="font-mono text-3xl text-slate-600">
        Introduce aquí la contraseña que quieras comprobar
      </h2>
      <div className="m-4">
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password123"
          // className="text-slate-200a p-2 rounded-md bg-gray-800 align plc-holder middle fontSize-2xl plc-holderSize-2xl"
          className="placeholder:font-2xl rounded-md bg-gray-800  p-2 text-slate-200 placeholder-slate-300 placeholder-opacity-30 placeholder:font-mono"
        />
        <button
          type="submit"
          id="submit"
          className="ml-3 rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700"
        >
          Comprobar
        </button>
      </div>
    </div>
  )
}
