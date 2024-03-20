import React from 'react'
import { Link } from 'react-router-dom'

const StartButton = () => {
  return (
   <Link to='/generator' className="focus:outline-none px-4 py-2 bg-blue-600 text-gray-100 font-semibold rounded-md hover:bg-blue-700 hover:drop-shadow-xl transition-colors ease-in duration-100">Start Generator</Link>
  )
}

export default StartButton