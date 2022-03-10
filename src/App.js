import React, { useState } from 'react'
import Main from './components/Main'
import Login from './components/Login'
import Upload from './components/Upload'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

const initialAuth = window.localStorage.getItem('loggedNoteappUser')

function App() {
  const [auth, setAuth] = useState(initialAuth)
  const handleAuth = () => {
    if(auth){
      setAuth(null)
      window.localStorage.removeItem('loggedAppUser')
    } else {
      setAuth(window.localStorage.getItem('loggedAppUser')
      )
    }

  }
  return (
    <Router>
      <div className="App">
        <Header handleAuth={handleAuth} auth={auth} />
        <Routes>
          <Route path='/login' element={<Login handleAuth={handleAuth} />} />
          <Route path='/' element={<Main/>} exact/>
          <Route path='/image' element={ auth ? <Upload/>: <></>}  />
        </Routes>
      </div>
    </Router>
  )
}

export default App
