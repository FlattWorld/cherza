// import CTA from './components/CTA'
import { useState } from 'react'
import Header from './components/Header'

function App(): JSX.Element {
  const [language, languageSet] = useState('ES')

  return (
    <>
      <Header language={language} languageSet={languageSet}></Header>
      {/* <CTA onClickFunction={() => console.log('clicked')} /> */}
    </>
  )
}

export default App
