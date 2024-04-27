import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


function Update() {
    const {id} = useParams()
    const users = useSelector((state) => state.users)
    const exsitingUser = users.filter(e=> e.id == id)
    const {email, passowrd} = exsitingUser[0]

    const [uemail, setEmail] = useState(email)
    const [upassword, setPassword] = useState(passowrd)
  return (
    <div>Update</div>
  )
}

export default Update