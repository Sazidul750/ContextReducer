import React from 'react'

import { UseUserContext } from './useUserContext'

export default function User({user}) {
  const {users,setUsers}=UseUserContext()
  const {id,userName}=user
 
  const handleDelete=(id)=>{
    const filterUser=users.filter(user=>user.id!==id)
    setUsers(filterUser)
  }
  return (
    <div className='user'>
      <p>{id}</p>
      <h3>{userName}</h3>
      <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}
