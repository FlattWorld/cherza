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
      <Header language={language as 'EN' | 'ES'} languageSet={languageSet} />
      <main>
        <Hero language={language as 'EN' | 'ES'} />
        <Services language={language as 'EN' | 'ES'} />
        <SomosCherza language={language as 'EN' | 'ES'} />
        <Contacto language={language as 'EN' | 'ES'} />
      </main>
      <Footer language={language as 'EN' | 'ES'} />
    </>
  )
}

export default App
