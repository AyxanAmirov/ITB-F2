import React, { useState } from 'react'
import Sign from './sign'
import Home from './home'


function App() {
  const [home, setHome] = useState(false)
  return (
    <>
    {
      home? <Home/>:<Sign setHome={setHome}/>
    }
    </>
  )
}

export default App
