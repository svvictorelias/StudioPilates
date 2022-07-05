import { Route, Routes } from 'react-router-dom'

import React from 'react'
import Page404 from '../pages/page404'
import Signup from '../pages/Signup'
import Home from '../pages/home'
import Login from '../pages/Login'
import MarkClass from '../pages/MarkClass'
import RegisterTeacher from '../pages/RegisterTeacher'
import StudentSpace from '../pages/StudentSpace'
import { parseCookies } from 'nookies'
import AdminSpace from '../pages/AdminSpace'
import EditProfile from '../pages/EditProfile'

const AppRoutes = () => {
  const { 'reactAuth.nivel': nivelUsuarioJWT } =
    parseCookies();
  const Space = ()=>{
    return nivelUsuarioJWT == 'USER' ?(<StudentSpace />):(<AdminSpace />)
  }
  return (
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil" element={<EditProfile />} />
      <Route path="/markClass" element={<MarkClass />} />
      <Route path="/*" element={<Page404 />} />
      <Route path="/dashboard" element={<Space/>} />
      <Route path="/RegisterTeacher" element={<RegisterTeacher />} />
    </Routes>
  )
}

export default AppRoutes
