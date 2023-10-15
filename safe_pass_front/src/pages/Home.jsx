// (c) URJC - Safe Pass 2023, rights reserved.

import React, { useState } from 'react';

export default function Home() {

  const AdditionalImages = () => {
    return (
      <div className="flex justify-center mt-4">
        {/* Primera imagen con texto */}
        <div className="m-4 text-center">
          <img src="/PasswordGen.jpeg" alt="Imagen 1" className="max-w-full" />
          <p>Genera de contraseñas seguras</p>
        </div>
        {/* Segunda imagen con texto */}
        <div className="m-4 text-center">
          <img src="/PwnedCheck.jpeg" alt="Imagen 2" className="max-w-full" />
          <p>Comprueba si tienes contraseñas vulneradas</p>
        </div>
        {/* Tercera imagen con texto */}
        <div className="m-4 text-center">
          <img src="/PasswordVal.jpeg" alt="Imagen 3" className="max-w-full" />
          <p>Valida tus contraseñas</p>
        </div>
      </div>
    );
  };
  const [showAdditionalImages, setShowAdditionalImages] = useState(false);

  const toggleAdditionalImages = () => {
    setShowAdditionalImages(!showAdditionalImages);
  };
  return (
    <div>
      <h1 className="font-mono text-5xl text-slate-200 pb-2">Safe Pass</h1>
      <div className="max-w-20rem overflow-hidden rounded-md bg-sky-950 shadow-md">
        <div className="px-4 py-2">
          <h4 className="mb-2 text-lg font-bold text-slate-200">El primer paso hacia una mayor seguridad</h4>
          <p className="text-slate-200">
            SafePass es un gestor de contraseñas que no solo te permite guardar tus credenciales, sino que también
            puedes comprobar si tu contraseña ha sido filtrada, validar si una contraseña es segura
            y generar contraseñas seguras de una manera fácil y rápida.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img className="w-40 pt-4 transform hover:scale-110 transition-transform duration-300 ease-in-out"
          src="/Logo.png"
          alt="Safe Pass Logo"
          onClick={toggleAdditionalImages} />
        {showAdditionalImages && <AdditionalImages />}
      </div>
    </div>
  )
}
