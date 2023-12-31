// (c) URJC - Safe Pass 2023, rights reserved.

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'
import SwitchModeButton from './SwitchModeButton'

export default function NavBar() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const { t } = useTranslation('global')
  return (
    <nav className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-900 dark:bg-black">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          {/* TODO: Terminar lo del logo */}
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            SafePass
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            onClick={toggleCollapse}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={!isCollapsed}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="flex items-center md:order-3">
            {/* Botones de Cambio de Modo */}
            <SwitchModeButton />
            {/* Botón de cambio de idioma */}
            <LanguageSelector />
          </div>
          <div className="flex items-center md:order-3"></div>
        </div>
        <div
          className={`${
            isCollapsed ? 'hidden' : ''
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-black md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-black">
            <li>
              <Link
                to="/"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                onClick={setIsCollapsed}
                aria-current="page"
              >
                {t('navbar.home')}
              </Link>
            </li>
            <li>
              <Link
                to="/generator"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                onClick={setIsCollapsed}
              >
                {t('navbar.generator')}
              </Link>
            </li>
            <li>
              <Link
                to="/validator"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                onClick={setIsCollapsed}
              >
                {t('navbar.validator')}
              </Link>
            </li>

            <li>
              <Link
                to="/leaked"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                onClick={setIsCollapsed}
              >
                {t('navbar.checker')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
