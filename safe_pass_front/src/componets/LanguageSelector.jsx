// (c) URJC - Safe Pass 2023, rights reserved.

import { TbWorld } from 'react-icons/tb'
export default function LanguajeSelector() {
  return (
    <div className="flex">
      <button
        className={`rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-500 ease-in-out focus:outline-none`}
      >
        Idiomas
        <TbWorld size={20} className="items-center justify-center" />
      </button>
    </div>
  )
}
