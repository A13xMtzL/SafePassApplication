// (c) URJC - Safe Pass 2023, rights reserved.
import React from 'react'
//import { generator } from '../../../safe_pass_back/src/generator.py';

export default function Generator() {
  return (<div>
  <h2 className="font-mono text-3xl text-slate-600">
    Generar contraseña segura
  </h2>
  <div className="m-4">

    <button
      type="submit"
      id="submit"
      className="ml-3 rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700"
    >
      Generar contraseña
    </button>
  </div>
</div>)
}
