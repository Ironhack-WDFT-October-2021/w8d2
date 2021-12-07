import React, { useState } from 'react'
import './App.css'
import Second from './components/Second'
import UserContext from './UserContext'

function App() {

  const user = { name: 'Foo' }

  return (
    <div className="App">
      <header className="App-header">
        <UserContext.Provider value={user}>
          <Second />
        </UserContext.Provider>
      </header>
    </div>
  )
}

export default App
