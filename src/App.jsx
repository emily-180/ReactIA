import React from 'react'
import SideBar from './components/Sidebar/Sidebar'
import Painel from './components/Painel/Painel'
import './App.css'

function App() {

  return (
    <>
    <div className="app-wrapper">
      <SideBar />
      <Painel />
    </div>
    </>
  )
}

export default App