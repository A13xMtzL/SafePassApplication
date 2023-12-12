// (c) URJC - Safe Pass 2023, rights reserved.

import i18next from 'i18next'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TbWorld } from 'react-icons/tb'

const languages = ['es', 'en', 'fr']

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation('global')

  const changeLanguage = (language) => {
    i18next.changeLanguage(language)
    localStorage.setItem('i18nextLng', language)
  }

  const LanguageButton = ({ language, languageName }) => (
    <button
      className="block px-4 py-2 text-sm text-gray-900"
      tabIndex={-1}
      onClick={() => {
        changeLanguage(language)
        setIsOpen(false)
      }}
    >
      {t(`navbar.${languageName}`)}
    </button>
  )

  return (
    <div className="relative inline-block text-left">
      <div className="ml-1">
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-500 ease-in-out hover:scale-x-105 hover:bg-gray-800 dark:bg-white dark:text-gray-900"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {t('navbar.language')}
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
            <LanguageButton language="es" languageName="spanish" />
            <LanguageButton language="en" languageName="english" />
            <LanguageButton language="fr" languageName="french" />
          </div>
        </div>
      )}
    </div>
  )
}
