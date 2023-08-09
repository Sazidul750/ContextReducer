import React from 'react'
import User from './User'
import { UseUserContext } from './useUserContext'

function Users() {
  const {users}=UseUserContext()
  return (
    <div className='users'>
      {
       users.map((user)=><User  user={user}  key={user.id} />)
      }
    </div>
  )
}

export default Users