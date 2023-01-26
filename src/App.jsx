import { useState } from 'react'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p className='text-3xl'>User App Management / Redux-Toolkit</p> 
      <Component2/>
      <Component1/>
    </div>
  )
}

export default App
