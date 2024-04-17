import React, {useState} from 'react'
import Register from './signUp'
import SignIn from './signIn'



function Sign({setHome}) {
    const [sign, setSign] = useState(false)
  return (
    <div className='body'>
      {
        sign ? <Register setSign={setSign} setHome={setHome}/> : <SignIn setHome={setHome} setSign={setSign}/>
        
      }
    </div>
  )
}

export default Sign
