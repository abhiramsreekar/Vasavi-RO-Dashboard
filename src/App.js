import React from 'react'
import Topbar from './Topbar'
import Nodemap from './Nodemap'
import Datacards from './Datacards'
import "./App.css"
function App() {
  return (
    <div className='parent'>
      <Topbar/>
      <Nodemap/>  
      <Datacards/>
    </div>
  )
}

export default App