import wheel from '../assets/Wheel.svg'
import { cta } from '../utils/language'

const CTA = ({ language }: { language: 'EN' | 'ES' }): JSX.Element => (
  <a
    href="#contact"
    className="text-2xl relative flex items-center justify-center group z-10 px-6 py-10 rounded-full"
  >
    <span className="z-10 group-hover:text-black transition-colors duration-300 group-hover:font-semibold">
      {cta[language]}
    </span>
    <img
      src={wheel}
      alt="button"
      className="absolute w-24 group-hover:w-40 transition-all duration-500 group-hover:animate-spin-slow animate-pulse"
    />
    <div
      className="rounded-full w-0 h-0 bg-gradient-to-r from-cherza-gold-strong to-cherza-gold-light
    group-hover:w-32 group-hover:h-32 absolute transition-all duration-500"
    ></div>
  </a>
)

export default CTA
