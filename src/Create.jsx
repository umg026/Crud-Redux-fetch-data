import React, { useState } from 'react'
import { addUser } from './userSlicer'
import { useDispatch } from 'react-redux'
import { pb } from './pb'


function Create() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const data = {
    "username": "",
    "email": email,
    "emailVisibility": true,
    "password": password,
    "passwordConfirm":password
};
  const handelSubmit = async(e) => {
    e.preventDefault()
    dispatch(addUser({ email, password }))  
    const record = await pb.collection('users').create(data);
    setEmail("") 
    setPassword("")
  }

  return (
    <div className='container d-flex mt-4'>
      <form onSubmit={handelSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Create