import React, { useState } from 'react'
import { UseUserContext } from './useUserContext'

function NewUsers() {
  const {addUser}=UseUserContext()
  const [userName,setUserName]=useState('')
  const handleChange=(e)=>{
    setUserName(e.target.value)
  }
  const handelSubmit=(e)=>{
    e.preventDefault()
    const newUser={id:new Date().getTime().toString(),userName:userName}
    setUserName(newUser)
    addUser(newUser)
    setUserName('')
  }
  return (
    <div>
      <form onSubmit={handelSubmit} >
        <input type="text" value={userName} onChange={handleChange} name="" id="" required />
        <button type='submit'>Add User</button>
      </form>
    </div>
  )
}

export default NewUsers