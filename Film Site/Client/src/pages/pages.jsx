import React from 'react'
import Home from './home/home'
import List from './list/List'
import { Route, Routes } from 'react-router'

function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/list' element={<List/>}/>
    </Routes>
  )
}

export default Pages
