import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Components/Login'
import Header from '../Components/Header'
import LoginEmail from '../Components/LoginEmail'
import Phone from '../Components/Phone'



function Navigation() {
  return (
    <div>
<Routes>
    <Route path={"/"} element={<Header/>}></Route>
    <Route path='/Login' element={<Login/>} ></Route>
    <Route path='/LoginEmail' element={<LoginEmail/>} ></Route>

</Routes>


      
    </div>
  )
}

export default Navigation
