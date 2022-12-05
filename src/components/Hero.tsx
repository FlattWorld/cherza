import heroCar from './../assets/hero-car.svg'
import { CTA } from './index'
const Hero = (): JSX.Element => (
  <div className="section bg-cherza-gray text-white">
    <div className="content py-28 flex gap-16">
      <div className="flex flex-col gap-12 items items-start">
        <h1 className="text-5xl flex flex-col">
          <span>Viaja rápido y</span>{' '}
          <span className="text-7xl">
            con <span className="shiny">seguridad</span>
          </span>
        </h1>
        <p className="tracking-widest leading-loose">
          Reserva un viaje en minutos,
          <br />
          nosotros nos encargamos del resto.
        </p>
        <div className="self-center">
          <CTA onClickFunction={() => alert('click')}></CTA>
        </div>
      </div>
      <img className="w-1/2" src={heroCar} alt="" />
    </div>
  </div>
)

export default Hero
