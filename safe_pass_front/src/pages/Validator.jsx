// (c) URJC - Safe Pass 2023, rights reserved.

import React from 'react'

export default function Validator() {
  return (
    <div>
      <h1>Safe Pass</h1>
      <h2>Introduce aquí la contraseña que quieras comprobar</h2>
      <input
        type="text"
        id="password"
        name="password"
        placeholder="Introduce la contraseña"
        className="text-yellow-400 rounded-md bg-gray-800 align text-center plc-holder middle fontSize-2xl plc-holderSize-2xl"
      />
      <button type="submit" id="submit" className="bg-yellow-400 ml-4">
        Comprobar
      </button>
    </div>
  )
}
