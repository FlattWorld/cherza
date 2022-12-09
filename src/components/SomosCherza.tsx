import { somosCherza } from '../utils/language'

const SomosCherza = ({ language }: { language: 'EN' | 'ES' }): JSX.Element => (
  <div className="section bg-cherza-gray ">
    <div
      className="content py-28 justify-start items-start flex-col text-white gap-12"
      id="aboutUs"
    >
      <h3 className="text-3xl md:text-5xl font-medium">
        {somosCherza[language].h3[0]}{' '}
        <span className="shiny">{somosCherza[language].h3[1]}</span>
      </h3>
      <p className="max-w-xl w-full lg:text-xl tranform -translate-y-8 text-cherza-gray-light">
        {somosCherza[language].p}
      </p>
      <ul className="w-full grid md:grid-cols-3 gap-x-2 gap-y-8">
        {somosCherza[language].services.map((service) => (
          <li
            key={service.title}
            className="border-l-4 pl-4 border-cherza-gold-strong ml-4 md:ml-0"
          >
            <span className="text-xl md:text-2xl font-cherza-header">
              {service.title}
            </span>
            <p className="text-sm lg:text-lg ">{service.desc}</p>
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="bg-cherza-gray rounded-xl border px-4 py-2 mt-20 hover:bg-cherza-black  text-white self-center
        group-hover:text-cherza-gold-strong hover:font-bold hover:border-none"
      >
        {somosCherza[language].button}
      </a>
    </div>
  </div>
)
export default SomosCherza
