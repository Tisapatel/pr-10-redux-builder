import React from 'react'
import Signup from './components/Signup'
import ViewUser from './components/ViewUser'
import { Route, Routes } from 'react-router'
import Header from './components/Header'


const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<Signup/>}/>
        <Route path='/viewUser' element={<ViewUser/>} />
      </Routes>
    </>
  )
}

export default App
