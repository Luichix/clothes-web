import React, { useContext } from 'react'
import Main from './components/Main'
import Login from './components/Login'
import Upload from './components/Upload'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AuthContext from './context/AuthContext'
import Dashboard from './components/Dashboard'

function App() {
  const { auth } = useContext(AuthContext)
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/login' element={<Login/>} exact />
          <Route path='/' element={<Main/>} exact/>
          {auth &&
          <>
            <Route path='/dashboard' element={<Dashboard/>}  exact/>
            <Route path='/upload' element={ <Upload/>}  exact/>
          </>
          }

        </Routes>
      </div>
    </Router>
  )
}

export default App
