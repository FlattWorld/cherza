import heroCar from './../assets/hero-car.svg'
import { CTA } from './index'
import { hero } from '../utils/language'
const Hero = ({ language }: { language: 'EN' | 'ES' }): JSX.Element => (
  <div className="section bg-cherza-gray text-white">
    <div className="content py-8 lg:py-28 flex gap-16 flex-col lg:flex-row">
      <div className="flex flex-col gap-12 items items-start">
        <h1 className="lg:text-5xl flex flex-col text-3xl">
          <span>{hero[language].title[0]}</span>
          <span className="lg:text-7xl text-5xl">
            {hero[language].title[1]}
            <span className="shiny">{hero[language].title[2]}</span>
          </span>
        </h1>
        <p className="tracking-widest leading-loose">
          {hero[language].des[0]}
          <br />
          {hero[language].des[1]}
        </p>
        <img className="w-2/3 lg:hidden self-center" src={heroCar} alt="" />
        <div className="self-center">
          <CTA language={language}></CTA>
        </div>
      </div>
      <img className="w-1/2 hidden lg:block" src={heroCar} alt="" />
    </div>
  </div>
)

export default Hero
