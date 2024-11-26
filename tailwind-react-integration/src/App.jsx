import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-blue-600">Welcome to Tailwind CSS</h1>
    <p className="text-lg text-gray-700 mt-4">
      Tailwind CSS is successfully integrated!
    </p>
  </div>
    )
}

export default App
