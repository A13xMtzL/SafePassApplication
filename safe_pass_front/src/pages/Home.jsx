// (c) URJC - Safe Pass 2023, rights reserved.

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const AdditionalImages = () => {
    return (
      <div className="mt-4 flex justify-center">
        {/* Primera imagen con texto */}
        <Link to="/generator">
          <div className="m-4 text-center dark:text-white">
            <img
              src="/PasswordGen.jpeg"
              alt="Generación de contraseña segura"
              className=" max-w-full"
            />
            <p>Genera contraseñas seguras</p>
          </div>
        </Link>
        {/* Segunda imagen con texto */}
        <Link to="/leaked">
          <div className="m-4 text-center dark:text-white">
            <img
              src="/PwnedCheck.jpeg"
              alt="Comprobación de contraseñas"
              className="max-w-full"
            />
            <p>Comprueba si tienes contraseñas vulneradas</p>
          </div>
        </Link>
        {/* Tercera imagen con texto */}
        <Link to="/validator">
          <div className="m-4 text-center dark:text-white">
            <img
              src="/PasswordVal.jpeg"
              alt="Validación de contraseñas"
              className="max-w-full"
            />
            <p>Valida tus contraseñas</p>
          </div>
        </Link>
      </div>
    )
  }
  const [showAdditionalImages, setShowAdditionalImages] = useState(false)

  const toggleAdditionalImages = () => {
    setShowAdditionalImages(!showAdditionalImages)
  }
  return (
    <div>
      <h1 className="pb-2 font-mono text-5xl text-slate-800 dark:text-slate-200">
        SafePass
      </h1>
      <div className="max-w-20rem z-10 overflow-hidden rounded-md bg-[#48474d]  shadow-md dark:bg-sky-950">
        <div className="px-4 py-2 ">
          <h4 className="mb-2 text-lg font-bold text-slate-200">
            El primer paso hacia una mayor seguridad
          </h4>
          <p className="text-slate-200">
            SafePass te permite realizar multiples acciones para mejorar tu
            seguridad digital como generar contraseñas aleatorias, comprobar la
            seguridad de tus contraseñas y comprobar si han sido filtradas.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="w-40 transform cursor-pointer pt-4 transition-transform duration-300 ease-in-out hover:rotate-12 hover:scale-110"
          src="/Logo.png"
          alt="Safe Pass Logo"
          onClick={toggleAdditionalImages}
        />
        {showAdditionalImages && <AdditionalImages />}
      </div>
    </div>
  )
}
