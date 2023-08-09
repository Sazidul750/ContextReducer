import React from 'react'
import Users from './components/Users'
import NewUsers from './components/NewUsers'
import ContextProvider from './components/Contex'
import Footer from './components/Footer'

export default function App() {

 
  return (
  <ContextProvider>
      <div className='App'>
      <NewUsers />
      <Users />
      <Footer />
    </div>
  </ContextProvider>
  )
}
