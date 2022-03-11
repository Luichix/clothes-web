import React, { useContext } from 'react'
import Main from './components/Main'
import Login from './components/Login'
import Upload from './components/Upload'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import AuthContext from './context/AuthContext'

function App() {
  const { auth } = useContext(AuthContext)
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/login' element={<Login/>} exact />
          <Route path='/' element={<Main/>} exact/>
          <Route path='/dashboard' element={ auth ? <Upload/> : <Navigate to='/' /> }  exact/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
