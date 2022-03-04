import React from 'react'
// import Header from './components/Header'
import Main from './components/Main'
// import Footer from './components/Footer'
import Login from './components/Login'
import Upload from './components/Upload'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Main/>} exact/>
          <Route path='/api/image' element={<Upload/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
