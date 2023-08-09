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
    <div className='NewUser'>
      <h1>User Resgistration</h1>
      <form onSubmit={handelSubmit} >
        <input type="text" placeholder='Add Your Name' value={userName} onChange={handleChange} name="" id="" required />
        <button className='btn' type='submit'>Add User</button>
      </form>
    </div>
  )
}

export default NewUsers