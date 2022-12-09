import cherzaTagHybrid from '../assets/cherza-tag-hybrid.svg'
import { useState, useEffect } from 'react'
import { footer } from '../utils/language'

const Footer = ({ language }: { language: 'EN' | 'ES' }): JSX.Element => {
  const [year, yearSet] = useState(2022)

  useEffect(() => {
    const date = new Date()
    yearSet(date.getFullYear())
  }, [])
  return (
    <div className="section bg-cherza-gray">
      <div className="content text-white py-8 flex-col items-center ">
        <div className="flex w-full items-center justify-between">
          <img
            src={cherzaTagHybrid}
            alt="logo"
            className=" w-28 sm:w-40 md:w-60"
          />
          <ul className="hidden md:flex items-center h-full gap-12">
            <a href="#home">
              <li className="hover:text-cherza-gold-strong px-4 py-2 cursor-pointer">
                {footer[language][0]}
              </li>
            </a>
            <a href="#services">
              <li className="hover:text-cherza-gold-strong px-4 py-2 cursor-pointer">
                {footer[language][1]}
              </li>
            </a>
            <a href="#aboutUs">
              <li className="hover:text-cherza-gold-strong px-4 py-2 cursor-pointer">
                {footer[language][2]}
              </li>
            </a>
          </ul>
          <a
            className="font-bold"
            href="https://wa.me/527221698023?text=Hola cherza!"
          >
            (722) 169 8023
          </a>
          <div className="flex gap-2 xl:gap-6">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/cherza8019"
            >
              <svg
                className="w-6 h-6 hover:text-cherza-gold-strong"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/cherza.viajes/"
            >
              <svg
                className="w-6 h-6 hover:text-cherza-gold-strong"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M128 80a48 48 0 1 0 48 48a48 48 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32.1 32.1 0 0 1-32 32Zm44-132H84a56 56 0 0 0-56 56v88a56 56 0 0 0 56 56h88a56 56 0 0 0 56-56V84a56 56 0 0 0-56-56Zm40 144a40 40 0 0 1-40 40H84a40 40 0 0 1-40-40V84a40 40 0 0 1 40-40h88a40 40 0 0 1 40 40Zm-20-96a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"
                />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/cherzaviajes"
            >
              <svg
                className="w-6 h-6 hover:text-cherza-gold-strong"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t flex w-1/2 justify-center border-cherza-gray-light text-cherza-gray-light ">
          <p>&copy; Cherza, {year}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
