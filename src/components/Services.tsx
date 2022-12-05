import carsServices from '../assets/cars-services.svg'
import card1 from '../assets/card1.svg'
import card2 from '../assets/card2.svg'
import card3 from '../assets/card3.svg'
import card1Hover from '../assets/card1-hover.svg'
import card2Hover from '../assets/card2-hover.svg'
import card3Hover from '../assets/card3-hover.svg'

const CoolTitle = (): JSX.Element => (
  <h2 className="flex flex-col relative items-center w-full">
    <span className="outlined text-7xl opacity-30 absolute whitespace-nowrap -top-12">
      ¿A dónde vamos?
    </span>
    <span className="text-5xl relative z-10">
      ¿A <span className="shiny">dónde</span> vamos?
    </span>
  </h2>
)

const Services = (): JSX.Element => (
  <div className="section bg-black text-white tracking-wider">
    <div className="content py-28 flex-col items-center gap-12">
      <CoolTitle></CoolTitle>
      <img src={carsServices} alt="cars" />
    </div>
    <div className="content pb-28">
      <div className=" w-1/3 px-4">
        <div
          className="bg-cherza-gray flex flex-col group hover:text-black hover:bg-cherza-gold-strong text-lg
            items-center justify-start p-4 py-8 rounded-2xl transition-colors
         gap-8"
        >
          <h3>Reservar</h3>
          <p>
            Viaja con seguridad y comodidad, tu experiencia con nosotros será
            inolvidable.
          </p>
          <img className="h-48 group-hover:hidden" src={card1} alt="car" />
          <img
            className="h-48 hidden group-hover:block self-start transform -translate-x-4"
            src={card1Hover}
            alt="car"
          />
          <button
            type="button"
            className="bg-cherza-gray rounded-xl border px-4 py-2 hover:bg-black text-white  group-hover:text-cherza-gold-strong"
          >
            ¡Quiero reservar!
          </button>
        </div>
      </div>
      <div className=" w-1/3 px-4">
        <div
          className="bg-cherza-gray flex flex-col group hover:text-black hover:bg-cherza-gold-strong text-lg
            items-center justify-start p-4 py-8 rounded-2xl transition-colors
         gap-8"
        >
          <h3>Reservar</h3>
          <p>
            Viaja con seguridad y comodidad, tu experiencia con nosotros será
            inolvidable.
          </p>
          <img className="h-48 group-hover:hidden" src={card2} alt="car" />
          <img
            className="h-48 hidden group-hover:block self-start transform -translate-x-4"
            src={card2Hover}
            alt="car"
          />
          <button
            type="button"
            className="bg-cherza-gray rounded-xl border px-4 py-2 hover:bg-black text-white  group-hover:text-cherza-gold-strong"
          >
            ¡Quiero reservar!
          </button>
        </div>
      </div>
      <div className=" w-1/3 px-4">
        <div
          className="bg-cherza-gray flex flex-col group hover:text-black hover:bg-cherza-gold-strong text-lg
            items-center justify-start p-4 py-8 rounded-2xl transition-colors
         gap-8"
        >
          <h3>Reservar</h3>
          <p>
            Viaja con seguridad y comodidad, tu experiencia con nosotros será
            inolvidable.
          </p>
          <img className="h-48 group-hover:hidden" src={card3} alt="car" />
          <img
            className="h-48 hidden group-hover:block self-start transform -translate-x-4"
            src={card3Hover}
            alt="car"
          />
          <button
            type="button"
            className="bg-cherza-gray rounded-xl border px-4 py-2 hover:bg-black text-white  group-hover:text-cherza-gold-strong"
          >
            ¡Quiero reservar!
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Services
