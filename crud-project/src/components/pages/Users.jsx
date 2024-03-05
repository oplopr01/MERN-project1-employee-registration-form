import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
const Users = () => {
  let [allUsers, setAllUsers] = useState([])
  let[reload, setReload] = useState(0)
  useEffect(()=>{
    axios.get("https://mern-project1-employee-registration-form.onrender.com/users")
    .then((e)=>{setAllUsers(e.data); setReload(1)})
  },[reload])

  let deleteUser = (e)=>{
    axios.delete(`https://mern-project1-employee-registration-form.onrender.com/users/${e}`)
    .then(()=>{setReload(2)})
  }

  return (
    <div>
      {
        allUsers.map((e)=>{
          return(
            <>
            <h1>name is : {e.name}</h1>
            <h2>working in the company : {e.company}</h2>
            <h2>who is taking salary of : {e.salary} Rs.</h2>
            <button onClick={()=>{deleteUser(e._id)}}>Delete</button>
            <button><Link to={`/edit/${e._id}`}>Edit</Link></button>
            <hr />
            </>
          
            )
        })
      }
    </div>
  )
}

export default Users