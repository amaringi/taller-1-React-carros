import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HolaMundo from './components/HolaMundo'
import Navegacion from './components/Navegacion'
import Contenido from './components/Contenido'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HolaMundo/>
      <Navegacion/>
      <Contenido/>
      <Footer/>
    </>
  )
}

export default App
