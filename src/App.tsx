import { useState } from 'react'
import {
  Contacto,
  Header,
  Hero,
  Services,
  SomosCherza,
  Footer,
} from './components/index'

function App(): JSX.Element {
  const [language, languageSet] = useState('ES')

  return (
    <>
      <Header language={language} languageSet={languageSet} />
      <main>
        <Hero language={language} />
        <Services language={language} />
        <SomosCherza language={language} />
        <Contacto language={language} />
      </main>
      <Footer language={language} />
    </>
  )
}

export default App
