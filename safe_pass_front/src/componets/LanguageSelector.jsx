// (c) URJC - Safe Pass 2023, rights reserved.

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TbWorld } from 'react-icons/tb'

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [t, i18n] = useTranslation('global')
  return (
    <div className="relative inline-block text-left">
      <div className="ml-1">
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 dark:bg-white dark:text-gray-900"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          Idiomas
          <TbWorld
            size={20}
            className="items-center justify-center text-white dark:text-gray-900"
          />
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1">
            {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
            <button
              className="block px-4 py-2 text-sm text-gray-900"
              tabIndex={-1}
              id="menu-item-0"
              onClick={() => i18n.changeLanguage('es')}
            >
              Español
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-900"
              tabIndex={-1}
              id="menu-item-1"
              onClick={() => i18n.changeLanguage('en')}
            >
              English
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-900"
              tabIndex={-1}
              id="menu-item-2"
              onClick={() => i18n.changeLanguage('fr')}
            >
              Français
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
