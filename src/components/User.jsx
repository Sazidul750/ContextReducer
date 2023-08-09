import React from 'react'

import { UseUserContext } from './useUserContext'

export default function User({user}) {
  const {deleteUser}=UseUserContext()
  const {id,userName}=user
 
  const handleDelete=(id)=>{
    deleteUser(id)
  }
  return (
    <div className='user'>
      <p>{id}</p>
      <h3>{userName}</h3>
      <button className='delete-btn' onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}
