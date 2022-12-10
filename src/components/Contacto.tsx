/* eslint-disable @typescript-eslint/no-misused-promises */
import contactPic from '../assets/contactPic.svg'
import { useForm } from '@formspree/react'
import { contacto } from '../utils/language'

const ContactForm = ({ language }: { language: 'EN' | 'ES' }): JSX.Element => {
  const onFocusHandler = (e: any): void => {
    e.target.previousSibling.style.top = '-1.5rem'
  }
  const onBlurHandler = (e: any): void => {
    if (e.target.value === '') {
      e.target.previousSibling.style.top = '-0.5rem'
      e.target.classList.add('bg-transparent')
      e.target.classList.remove('bg-cherza-gray')
    } else {
      e.target.classList.remove('bg-transparent')
      e.target.classList.add('bg-cherza-gray')
    }
  }
  const [state, handleSubmit] = useForm('xgeqgyyl')
  if (state.succeeded) {
    return (
      <p className="text-3xl lg:text-5xl">
        {contacto[language].contactSuccess[0]}
        <span className="shiny">{contacto[language].contactSuccess[1]}</span>
        {contacto[language].contactSuccess[2]}
      </p>
    )
  }
  return (
    <form
      id="contact"
      action=""
      className="flex flex-wrap gap-y-12 gap-6 justify-evenly px-4 mt-8 lg:mt-0"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="name"
        className="border rounded-lg relative border-cherza-gold-strong"
      >
        <span className="text-sm absolute bg-cherza-black -top-2 left-2 px-2 text-cherza-gray-light transition-all">
          {contacto[language].fields[0]}
        </span>
        <input
          required
          type="text"
          name="name"
          id="name"
          className="bg-transparent focus:outline-none text-lg px-4 py-2 rounded-lg"
          onFocus={(e) => onFocusHandler(e)}
          onBlur={(e) => {
            onBlurHandler(e)
          }}
        />
      </label>
      <label
        htmlFor="lastName"
        className="border rounded-lg relative border-cherza-gold-strong"
      >
        <span className="text-sm absolute bg-cherza-black -top-2 left-2 px-2 text-cherza-gray-light transition-all">
          {contacto[language].fields[1]}
        </span>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="bg-transparent focus:outline-none text-lg px-4 py-2 rounded-lg"
          onFocus={(e) => onFocusHandler(e)}
          onBlur={(e) => {
            onBlurHandler(e)
          }}
        />
      </label>
      <label
        htmlFor="phone"
        className="border rounded-lg relative border-cherza-gold-strong"
      >
        <span className="text-sm absolute bg-cherza-black -top-2 left-2 px-2 text-cherza-gray-light transition-all">
          {contacto[language].fields[2]}
        </span>
        <input
          required
          type="tel"
          name="phone"
          id="phone"
          className="bg-transparent focus:outline-none text-lg px-4 py-2 rounded-lg"
          onFocus={(e) => onFocusHandler(e)}
          onBlur={(e) => {
            onBlurHandler(e)
          }}
        />
      </label>
      <label
        htmlFor="mail"
        className="border rounded-lg relative border-cherza-gold-strong"
      >
        <span className="text-sm absolute bg-cherza-black -top-2 left-2 px-2 text-cherza-gray-light transition-all">
          {contacto[language].fields[3]}
        </span>
        <input
          type="mail"
          name="mail"
          id="mail"
          className="bg-transparent focus:outline-none text-lg px-4 py-2 rounded-lg"
          onFocus={(e) => onFocusHandler(e)}
          onBlur={(e) => {
            onBlurHandler(e)
          }}
        />
      </label>
      <label
        htmlFor="service"
        className="border rounded-lg relative border-cherza-gold-strong"
      >
        <span className="text-sm absolute bg-cherza-black -top-2 left-2 px-2 text-cherza-gray-light transition-all">
          {contacto[language].fields[4]}
        </span>
        <input
          required
          type="text"
          name="service"
          id="service"
          className="bg-transparent focus:outline-none text-lg px-4 py-2 rounded-lg"
          onFocus={(e) => onFocusHandler(e)}
          onBlur={(e) => {
            onBlurHandler(e)
          }}
        />
      </label>
      <label
        htmlFor="passengers"
        className="border rounded-lg relative border-cherza-gold-strong"
      >
        <span className="text-sm absolute bg-cherza-black -top-2 left-2 px-2 text-cherza-gray-light transition-all">
          {contacto[language].fields[5]}
        </span>
        <input
          min="1"
          type="number"
          name="passengers"
          id="passengers"
          className="bg-transparent focus:outline-none text-lg px-4 py-2 rounded-lg"
          onFocus={(e) => onFocusHandler(e)}
          onBlur={(e) => {
            onBlurHandler(e)
          }}
        />
      </label>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary  py-2 px-16 rounded-lg "
      >
        {contacto[language].button}
      </button>
    </form>
  )
}

const Contacto = ({ language }: { language: 'EN' | 'ES' }): JSX.Element => {
  return (
    <div className="section bg-cherza-black ">
      <div className="content py-28 justify-start items-start flex-col text-white gap-6">
        <h3 className="text-3xl md:text-6xl font-medium">
          {contacto[language].h3[0]}{' '}
          <span className="shiny">{contacto[language].h3[1]}</span>
        </h3>
        <p className="max-w-xl w-full lg:text-xl">{contacto[language].p}</p>
        <div className="flex w-full justify-between items-center">
          <ContactForm language={language} />
          <img
            src={contactPic}
            alt="contact-picture"
            className="w-[350px] rounded-lg hidden xl:block"
          />
        </div>

        <div className="text-sm text-white group flex w-full gap-4 items-center whitespace-nowrap">
          <span className="text-sm">
            {contacto[language].paymentMethods.title}
          </span>
          <ul className=" flex w-full gap-4 flex-wrap">
            {contacto[language].paymentMethods.methods.map((method) => (
              <li key={method}>{method}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contacto
