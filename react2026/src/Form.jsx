import React, { useState } from 'react';




const Form = ({users}) => {
  const [profileInput, setProfileInput]= useState('')
  const [usernameInput, setUserNameInput]= useState('')
  const formHandler = (e) => {

   e.preventDefault()
   let oldUser = users.user
   let newuser = {"username" : usernameInput, "profile" : profileInput}
   users.setUser([...oldUser,newuser])

   console.log(newuser)
   console.log(oldUser)

   setProfileInput("")
   setUserNameInput("")
  
  }
  return (
    <div>
      <form onSubmit={formHandler} className='bg-emerald-600 w-52 h-52 flex flex-col p-4 gap-3 rounded-md' action="">
        <input value={usernameInput} onChange={(e)=>setUserNameInput(e.target.value)} type="text" className='bg-green-200 w-40 h-10 rounded-md  p-4 ' placeholder='Usename' />
        <input value={profileInput} onChange={(e)=>setProfileInput(e.target.value)} type="text" className='bg-green-200 w-40 h-10 rounded-md  p-4  ' placeholder='Profile pic' />
      
        <button className='bg-amber-200 w-24 h-10 rounded-md'>Submit</button>
      </form>
      
    </div>
  );
}

export default Form;
