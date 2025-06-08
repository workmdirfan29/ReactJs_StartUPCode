import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <>
      <Navbar/>
      <main style={{minHeight: "100vh"}}>
          <Outlet />
      </main>
    </>
  )
}

export default App
