// (c) URJC - Safe Pass 2023, rights reserved.

import React from 'react'
import {
  BsBook,
  BsCheckAll,
  BsClock,
  BsEye,
  BsKey,
  BsShieldLock,
  BsShieldShaded,
  BsWifi,
} from 'react-icons/bs'

export default function PasswordSecurityGuide() {
  const tips = [
    {
      icon: <BsShieldLock size={40} className="text-blue-500" />,
      title: 'Contraseñas Fuertes',
      content:
        'Combina mayúsculas, minúsculas, números y caracteres especiales para hacerlas inquebrantables.',
    },
    {
      icon: <BsShieldShaded size={40} className="text-green-500" />,
      title: 'Diversifica tus Contraseñas',
      content:
        'No uses la misma contraseña en todas partes. Un administrador de contraseñas es tu aliado.',
    },
    {
      icon: <BsKey size={40} className="text-yellow-500" />,
      title: 'Hazlas Largas y Poderosas',
      content:
        'Opta por contraseñas de al menos 16 caracteres. La longitud añade fuerza.',
    },
    {
      icon: <BsClock size={40} className="text-purple-500" />,
      title: 'Actualízate Constantemente',
      content:
        'Cambia tus contraseñas regularmente, al menos cada 3-6 meses. ¡Mantén la frescura!',
    },
    {
      icon: <BsCheckAll size={40} className="text-red-500" />,
      title: 'Verificación en Dos Pasos',
      content:
        'Activa la verificación en dos pasos siempre que sea posible. ¡Doble seguridad!',
    },
    {
      icon: <BsWifi size={40} className="text-indigo-500" />,
      title: 'Conexiones Seguras Siempre',
      content:
        'Usa conexiones seguras (HTTPS) al cambiar o ingresar contraseñas. Evita redes públicas no seguras.',
    },
    {
      icon: <BsBook size={40} className="text-pink-500" />,
      title: 'Conciencia y Formación',
      content:
        'Educa a los usuarios sobre la importancia de las contraseñas seguras. Mantente informado sobre las amenazas.',
    },
    {
      icon: <BsEye size={40} className="text-orange-500" />,
      title: 'Monitoreo de Actividad',
      content:
        'Revisa regularmente la actividad de tu cuenta. ¡Detecta y actúa contra actividades sospechosas!',
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 overflow-auto h-screen md:h-auto">
      {tips.map((tip, index) => (
        <div
          key={index}
          className="flex transform flex-col rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:rotate-1 hover:shadow-lg"
        >
          <div className="mb-4 flex items-center justify-center">
            {tip.icon}
          </div>
          <h2 className="mb-2 text-lg font-semibold">{tip.title}</h2>
          <p className="text-gray-700">{tip.content}</p>
        </div>
      ))}
    </div>
  )
}
