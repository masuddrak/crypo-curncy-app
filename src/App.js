import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Coins from './components/Coins/Coins'
import Contac from './components/Contact/Contact'
import Header from './components/Header/Header'
import Homepae from './components/Homepage/Homepage'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import CoinDetails from './components/CoinDetails/CoinDetails'
import BdAddress from './components/Contact/BdAddress'
import UsAddress from './components/Contact/UsAddress'
const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homepae></Homepae>}></Route>
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/coin-details/:id' element={<CoinDetails></CoinDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contac></Contac>}>
          <Route path='bd-adress' element={<BdAddress></BdAddress>}></Route>
          <Route path='us-adress' element={<UsAddress></UsAddress>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
