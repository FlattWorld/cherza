import carsServices from '../assets/cars-services.svg'
import card1 from '../assets/card1.svg'
import card2 from '../assets/card2.svg'
import card3 from '../assets/card3.svg'
import card1Hover from '../assets/card1-hover.svg'
import card2Hover from '../assets/card2-hover.svg'
import card3Hover from '../assets/card3-hover.svg'
import { services } from '../utils/language'
const images = [
  [card1, card1Hover],
  [card2, card2Hover],
  [card3, card3Hover],
]

const CoolTitle = ({ language }: { language: 'EN' | 'ES' }): JSX.Element => (
  <h2 className="flex flex-col relative items-center w-full">
    <span className="outlined text-cherza-black text-4xl lg:text-7xl opacity-30 absolute whitespace-nowrap lg:-top-12 -top-6">
      {services[language].h2[0]}
    </span>
    <span className=" text-3xl lg:text-5xl relative z-10 font-medium">
      {services[language].h2[1]}{' '}
      <span className="shiny font-medium">{services[language].h2[2]}</span>{' '}
      {services[language].h2[3]}
    </span>
  </h2>
)

const Services = ({ language }: { language: 'EN' | 'ES' }): JSX.Element => (
  <div className="section bg-cherza-black  text-white ">
    <div className="content py-28 flex-col items-center gap-12" id="services">
      <CoolTitle language={language}></CoolTitle>
      <img src={carsServices} alt="cars" />
    </div>
    <div className="content pb-8 flex-wrap justify-center">
      {services[language].cards.map((service: any, idx: number) => (
        <div key={service[0]} className="w-full sm:w-1/2 lg:w-1/3 p-6">
          <div
            className="bg-cherza-gray flex flex-col group hover:text-black
              hover:bg-cherza-gold-strong focus:bg-cherza-gold-strong text-lg
                items-center justify-start rounded-2xl transition-colors pt-8 gap-6 pb-4 px-4"
          >
            <h3 className="font-medium">{service[0]}</h3>
            <p className="h-24">{service[1]}</p>
            <img
              className="h-48 group-hover:hidden"
              src={images[idx][0]}
              alt="car"
            />
            <img
              className="h-48 hidden group-hover:block self-start transform -translate-x-4"
              src={images[idx][1]}
              alt="car"
            />
            <a
              href="#contact"
              className="bg-cherza-gray rounded-xl border px-4 py-2 hover:bg-cherza-black
              text-white self-center group-hover:text-cherza-gold-strong group-hover:self-end
              hover:font-bold group-hover:border-none"
            >
              {services[language].button}
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Services
