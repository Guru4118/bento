import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from '../pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Homepage/>
      
    </>
  )
}

export default App
