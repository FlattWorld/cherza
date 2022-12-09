// Theme will not be supported currently, all related is commented
import cherzaFull from '../assets/cherza-logo-simple.svg'
import { header } from '../utils/language'
import { useState } from 'react'

const Selectors = ({
  language,
  languageSet,
  mobile = false,
}: {
  language: 'EN' | 'ES'
  languageSet: Function
  mobile?: boolean
}): JSX.Element => {
  if (mobile)
    return (
      <div className="flex gap-8 ">
        <div
          id="language-selector"
          className="border-b relative font-cherza-paragraph"
        >
          <button
            onClick={() => languageSet('ES')}
            className={`p-2 py-0 ${
              language === 'ES' ? 'font-bold' : 'font-normal'
            }`}
            type="button"
          >
            ES
          </button>
          <button
            onClick={() => languageSet('EN')}
            className={`p-2 py-0 ${
              language === 'EN' ? 'font-bold' : 'font-medium'
            }`}
            type="button"
          >
            EN
          </button>
          <div
            className={`absolute -bottom-0.5 w-1/2 h-1 bg-cherza-gray transform transition-transform ${
              language === 'EN' ? 'translate-x-full' : ''
            }`}
          >
            {' '}
          </div>
        </div>
      </div>
    )
  return (
    <div className="flex gap-8 ">
      <div id="language-selector" className="border-b relative">
        <button
          onClick={() => languageSet('ES')}
          className={`p-2 py-0 hover:font-bold ${
            language === 'ES'
              ? 'text-cherza-gold-strong font-bold'
              : 'font-normal'
          }`}
          type="button"
        >
          ES
        </button>
        <button
          onClick={() => languageSet('EN')}
          className={`p-2 py-0 hover:font-bold ${
            language === 'EN'
              ? 'text-cherza-gold-strong font-bold'
              : 'font-normal'
          }`}
          type="button"
        >
          EN
        </button>
        <div
          className={`absolute -bottom-0.5 w-1/2 h-1 bg-cherza-gold-strong transform transition-transform ${
            language === 'EN' ? 'translate-x-full' : ''
          }`}
        >
          {' '}
        </div>
      </div>
    </div>
  )
}

const MobileMenu = ({
  isOpen,
  isOpenSet,
  language,
  languageSet,
}: {
  isOpen: boolean
  isOpenSet: Function
  language: 'EN' | 'ES'
  languageSet: Function
}): JSX.Element => (
  <div className="relative lg:hidden">
    <button
      onClick={() => isOpenSet(!isOpen)}
      type="button"
      className="h-6 w-8 flex flex-col justify-between items-end"
    >
      <div
        className={`bg-cherza-gold-strong h-1 transform transition ${
          isOpen ? 'w-8 -rotate-45 translate-y-2.5' : 'w-6'
        }`}
      ></div>
      <div
        className={`bg-cherza-gold-strong h-1 w-8 ${isOpen ? 'hidden' : ''}`}
      ></div>
      <div
        className={`bg-cherza-gold-strong h-1 transform transition ${
          isOpen ? 'w-8 rotate-45 -translate-y-2.5' : 'w-6'
        }`}
      ></div>
    </button>
    {isOpen && (
      <div className="flex flex-col items-center gap-4 bg-cherza-gold-strong absolute right-8 w-60 rounded-xl pt-2 pb-6 whitespace-nowrap text-black z-10">
        <nav className="">
          <ul
            className="flex items-center h-full gap-1 flex-col"
            onClick={() => isOpenSet(false)}
          >
            <a href="#home">
              <li className="px-4 py-2 cursor-pointer">
                {header[language][0]}
              </li>
            </a>
            <a href="#services">
              <li className="px-4 py-2 cursor-pointer">
                {header[language][1]}
              </li>
            </a>
            <a href="#aboutUs">
              <li className="px-4 py-2 cursor-pointer">
                {header[language][2]}
              </li>
            </a>
            <a href="#contact">
              <li className="bg-cherza-black  text-cherza-gold-strong px-4 py-2 rounded-lg">
                {header[language][3]}
              </li>
            </a>
          </ul>
        </nav>
        <div className="">
          <Selectors
            mobile
            language={language}
            languageSet={languageSet}
          ></Selectors>
        </div>
      </div>
    )}
  </div>
)

const Header = ({
  language,
  languageSet,
}: {
  language: 'EN' | 'ES'
  languageSet: Function
}): JSX.Element => {
  const [isOpen, isOpenSet] = useState(false)
  return (
    <header className="bg-cherza-black  section p-4 text-white" id="home">
      <div className="content justify-between items-center">
        <img src={cherzaFull} alt="logo" className="w-20" />
        <nav className="hidden lg:block">
          <ul className="flex items-center h-full gap-12">
            <a href="#home">
              <li className="hover:text-cherza-gold-strong px-4 py-2 cursor-pointer">
                {header[language][0]}
              </li>
            </a>
            <a href="#services">
              <li className="hover:text-cherza-gold-strong px-4 py-2 cursor-pointer">
                {header[language][1]}
              </li>
            </a>
            <a href="#aboutUs">
              <li className="hover:text-cherza-gold-strong px-4 py-2 cursor-pointer">
                {header[language][2]}
              </li>
            </a>
            <a href="#contact">
              <li className="btn-primary">{header[language][3]}</li>
            </a>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <Selectors language={language} languageSet={languageSet}></Selectors>
        </div>
        <MobileMenu
          language={language}
          languageSet={languageSet}
          isOpen={isOpen}
          isOpenSet={isOpenSet}
        />
      </div>
    </header>
  )
}

export default Header
