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

const CoolTitle = ({ language }: { language: string }): JSX.Element => (
  <h2 className="flex flex-col relative items-center w-full">
    <span className="outlined text-7xl opacity-30 absolute whitespace-nowrap -top-12">
      {services[language].h2[0]}
    </span>
    <span className="text-5xl relative z-10">
      {services[language].h2[1]}{' '}
      <span className="shiny">{services[language].h2[2]}</span>{' '}
      {services[language].h2[3]}
    </span>
  </h2>
)

const Services = ({ language }: { language: string }): JSX.Element => (
  <div className="section bg-black text-white tracking-wider">
    <div className="content py-28 flex-col items-center gap-12" id="services">
      <CoolTitle language={language}></CoolTitle>
      <img src={carsServices} alt="cars" />
    </div>
    <div className="content pb-28">
      {services[language].cards.map(
        (service: [string, string], idx: number) => (
          <div key={service[0]} className=" w-1/3 px-4">
            <div
              className="bg-cherza-gray flex flex-col group hover:text-black hover:bg-cherza-gold-strong text-lg
                items-center justify-start p-4 py-8 rounded-2xl transition-colors
             gap-8"
            >
              <h3>{service[0]}</h3>
              <p>{service[1]}</p>
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
                className="bg-cherza-gray rounded-xl border px-4 py-2 mt-20 hover:bg-black text-white self-center group-hover:text-cherza-gold-strong"
              >
                {services[language].button}
              </a>
            </div>
          </div>
        ),
      )}
    </div>
  </div>
)

export default Services
