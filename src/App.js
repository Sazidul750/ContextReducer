import React, { useState } from 'react'
import Users from './components/Users'
import NewUsers from './components/NewUsers'
import { UserContext } from './components/Contex'

export default function App() {
  const [users,setUsers]=useState([
    {id:1,userName:'sazidul islam'},
    {id:2,userName:' khan'},
  ])
 
  return (
  <UserContext.Provider value={{users,setUsers}}>
      <div>
      <NewUsers />
      <Users />
    </div>
  </UserContext.Provider>
  )
}
