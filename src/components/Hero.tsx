import heroCar from './../assets/hero-car.svg'
import { CTA } from './index'
import { hero } from '../utils/language'
const Hero = ({ language }: { language: string }): JSX.Element => (
  <div className="section bg-cherza-gray text-white">
    <div className="content py-28 flex gap-16">
      <div className="flex flex-col gap-12 items items-start">
        <h1 className="text-5xl flex flex-col">
          <span>{hero[language].title[0]}</span>
          <span className="text-7xl">
            {hero[language].title[1]}
            <span className="shiny">{hero[language].title[2]}</span>
          </span>
        </h1>
        <p className="tracking-widest leading-loose">
          {hero[language].des[0]}
          <br />
          {hero[language].des[1]}
        </p>
        <div className="self-center">
          <CTA language={language}></CTA>
        </div>
      </div>
      <img className="w-1/2" src={heroCar} alt="" />
    </div>
  </div>
)

export default Hero
