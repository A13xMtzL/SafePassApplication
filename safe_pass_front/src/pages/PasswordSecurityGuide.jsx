// (c) URJC - Safe Pass 2023, rights reserved.

import React from 'react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation('global')
  const tips = [
    {
      icon: <BsShieldLock size={40} className="text-blue-500" />,
      title: t('guide.Strong-passwords'),
      content: t('guide.Strong-passwords-description'),
    },
    {
      icon: <BsShieldShaded size={40} className="text-green-500" />,
      title: t('guide.Diversify-your-passwords'),
      content: t('guide.Diversify-your-passwords-description'),
    },
    {
      icon: <BsKey size={40} className="text-yellow-500" />,
      title: t('guide.Make-them-long-and-powerful'),
      content: t('guide.Make-them-long-and-powerful-description'),
    },
    {
      icon: <BsClock size={40} className="text-purple-500" />,
      title: t('guide.Update-constantly'),
      content: t('guide.Update-constantly-description'),
    },
    {
      icon: <BsCheckAll size={40} className="text-red-500" />,
      title: t('guide.Two-factor-authentication'),
      content: t('guide.Two-factor-authentication-description'),
    },
    {
      icon: <BsWifi size={40} className="text-indigo-500" />,
      title: t('guide.Secure-connections-always'),
      content: t('guide.Secure-connections-always-description'),
    },
    {
      icon: <BsBook size={40} className="text-pink-500" />,
      title: t('guide.Awareness-and-training'),
      content: t('guide.Awareness-and-training-description'),
    },
    {
      icon: <BsEye size={40} className="text-orange-500" />,
      title: t('guide.Monitor-your-accounts'),
      content: t('guide.Monitor-your-accounts-description'),
    },
  ]

  return (
    <div className="grid h-screen grid-cols-1 gap-6 overflow-auto md:h-auto md:grid-cols-2 lg:grid-cols-3">
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
