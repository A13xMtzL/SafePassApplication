// (c) URJC - Safe Pass 2023, rights reserved.

import ReactCountryFlag from 'react-country-flag'
import { useTranslation } from 'react-i18next'

export default function LanguageButton({
  language,
  languageName,
  languageCountry,
  activeLanguage,
  changeLanguage,
  setIsOpen,
}) {
  const { t } = useTranslation('global')

  return (
    <div>
      <button
        className={`block w-36 px-4 py-2 text-left text-sm hover:bg-slate-400 ${
          language === activeLanguage
            ? 'bg-slate-300 text-black dark:bg-slate-700 dark:text-white'
            : 'text-gray-800'
        }`}
        tabIndex={-1}
        onClick={() => {
          changeLanguage(language)
          setIsOpen(false)
        }}
      >
        <ReactCountryFlag
          countryCode={languageCountry}
          svg
          style={{ width: '2em', height: '2em', marginRight: '10px' }}
        />
        {t(`navbar.${languageName}`)}{' '}
      </button>
    </div>
  )
}
