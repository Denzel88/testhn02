import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ClienDetail from './components/ClienDetail'
import ClientEdit from './components/ClienDetail'
import ClientCreate from './components/ClientCreate'
import ClientListing from './components/ClientListing'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Register from './components/Register'



const App = () => {
  return (
    <div>
    <ToastContainer></ToastContainer>
    <Router>  
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/client/*' element={<ClientListing/>} />
        <Route path='/client/create' element={<ClientCreate/>} />
        <Route path='/client/detail/:clienid' element={<ClienDetail/>} />
        <Route path='/client/edit/:clienid' element={<ClientEdit/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App