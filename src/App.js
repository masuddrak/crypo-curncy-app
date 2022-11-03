import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepae from './components/Homepage/Homepage'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepae></Homepae>}></Route>
      </Routes>
    </div>
  )
}

export default App
