import React from 'react'
import "./style.css"
function Home({setHome}) {
  const logOut = ()=>{
    setHome(false)
    localStorage.removeItem("user");
  }
  return (
    <div className='flex'>
      <h1>Home Page</h1>
      <button className='out-btn' onClick={logOut}>Log Out</button>
    </div>
  )
}

export default Home
