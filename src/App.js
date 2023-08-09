import React from 'react'
import Users from './components/Users'
import NewUsers from './components/NewUsers'
import ContextProvider from './components/Contex'

export default function App() {

 
  return (
  <ContextProvider>
      <div className='App'>
      <NewUsers />
      <Users />
    </div>
  </ContextProvider>
  )
}
