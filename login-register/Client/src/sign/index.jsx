import React, {useState} from 'react'
import Register from './signUp'
import SignIn from './signIn'



function Sign() {
    const [sign, setSign] = useState(true)
  return (
    <div className='body'>
      {
        sign ?<Register/> : <SignIn/>
        
      }
    </div>
  )
}

export default Sign
