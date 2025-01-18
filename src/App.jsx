import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <main style={{minHeight: "100vh"}}>
          <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
