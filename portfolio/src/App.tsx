import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <p> Hello</p>
        <p> Rudy</p>
      </div>
    </>
  )
}

export default App
