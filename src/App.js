import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Coins from './components/Coins/Coins'
import Contac from './components/Contact/Contact'
import Header from './components/Header/Header'
import Homepae from './components/Homepage/Homepage'
import About from './components/About/About'
const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepae></Homepae>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contac></Contac>}></Route>
      </Routes>
    </div>
  )
}

export default App
