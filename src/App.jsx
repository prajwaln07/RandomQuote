import React from 'react'
import Navbar from './Componenets/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Saved from './pages/Saved'

const App = () => {
  return (
    <div>

     <Navbar></Navbar>
         <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/save'element={<Saved></Saved>} ></Route>
         </Routes>
    </div>
  )
}

export default App
