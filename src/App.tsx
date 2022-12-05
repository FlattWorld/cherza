import { useState } from 'react'
import { Header, Hero, Services } from './components/index'

function App(): JSX.Element {
  const [language, languageSet] = useState('ES')

  return (
    <>
      <Header language={language} languageSet={languageSet}></Header>
      <main>
        <Hero></Hero>
        <Services></Services>
      </main>
    </>
  )
}

export default App
