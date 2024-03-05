import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
const CreateUser = () => {
    let [name, setName]  = useState("")
    let [company, setCompany] = useState("")
    let [salary, setSalary] = useState()
    let navigate = useNavigate()
    let formHandle= (e)=>{
      
      e.preventDefault()

      let payload ={
        name:name,
        company : company,
        salary: salary
      }
        axios.post("https://mern-project1-employee-registration-form.onrender.com/submit",payload)
        .then(()=>{console.log("data send to backend"); navigate("/users")})
        .catch(()=>{console.log("unable to send data from frontend...!!");})
    }
  return (
    <div>
        <form action="">
            <label>Name: </label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            <label>company: </label>
            <input type="text" value={company} onChange={(e)=>{setCompany(e.target.value)}} />
            <label>salary: </label>
            <input type="text" value={salary} onChange={(e)=>{setSalary(e.target.value)}} />
            <button onClick={formHandle}>submit</button>
        </form>
    </div>
  )
}

export default CreateUser