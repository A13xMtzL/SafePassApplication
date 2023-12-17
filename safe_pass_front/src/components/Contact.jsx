// (c) URJC - Safe Pass 2023, rights reserved.

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation('global')
  const [Email, setEmail] = useState('delta.software@gmail.com')
  const [Subject, setSubject] = useState('')
  const [Message, setMessage] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    window.open(`mailto:${Email}?subject=${Subject}&body=${Message}`)
  }

  return (
    <section className="bg-slate-200 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-md px-5 pb-2 pt-8 lg:pt-5">
        <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight text-gray-700 dark:text-white">
          {t('contact.title')}
        </h2>
        <form action="#" className="space-y-8" onSubmit={handleFormSubmit}>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-left text-sm font-medium text-gray-900 dark:text-gray-300"
            ></label>
            <input
              type="email"
              id="email"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder={t('contact.mailPlaceholder')}
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
              required
              readOnly
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className=" mb-2 block text-left text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {t('contact.subject')}
            </label>
            <input
              type="text"
              id="subject"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder={t('contact.subjectPlaceholder')}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-left text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {t('contact.message')}
            </label>
            <textarea
              id="message"
              rows={2}
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder={t('contact.messagePlaceholder')}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="focus:ring-primary-300 dark:focus:ring-primary-800 rounded-lg bg-slate-500 px-5 py-3 text-center text-sm font-medium text-white transition duration-300 ease-in-out hover:scale-x-105 hover:bg-slate-700 focus:outline-none focus:ring-4  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:hover:bg-slate-800 sm:w-fit"
          >
            {t('contact.send')}
          </button>
        </form>
      </div>
    </section>
  )
}
