import React, { useEffect, useState } from 'react'
import Sign from './sign'
import Home from './home'


function App() {
  const [home, setHome] = useState(false)
  useEffect(() => {
   let user = JSON.parse(localStorage.getItem('user'))
    if(user){
      setHome(true)
    }else{
      setHome(false)
    }
  }, [])
  
  return (
    <>
    {
      home? <Home setHome={setHome}/>:<Sign setHome={setHome}/>
    }
    </>
  )
}

export default App
