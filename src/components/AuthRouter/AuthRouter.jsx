import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from '../../pages/Signin/Signin'
import Signup from '../../pages/Board/Signup/Signup'
import Home from '../../pages/Home/Home'
import AuthRouter from '../../pages/AuthRouter/AuthRouter'

function AuthRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth/*" element={<AuthRouter />} />
      </Routes>
    </>
  )
}

export default AuthRouter