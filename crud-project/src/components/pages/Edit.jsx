import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
const Edit = () => {

  let [name, setName] = useState("")
  let [company, setCompany] = useState("")
  let [salary, setSalary] = useState()
  let navigate = useNavigate()
  let ID = useParams()

  useEffect(() => {
    axios.get(`http://localhost:4001/edit/${ID.ID}`)
      .then((e) => { 
        setName(e.data.name);
        setSalary(e.data.salary);
        setCompany(e.data.company)
       })
  }, [])


  let formHandle = (e) => {

    e.preventDefault()

    let payload = {
      name: name,
      company : company,
      salary : salary
    }
    axios.put(`http://localhost:4001/edit/${ID.ID}`, payload)
      .then(() => { console.log("data send to backend"); navigate("/users") })
      .catch(() => { console.log("unable to send data from frontend...!!"); })
  }
  return (
    <div>
      <form action="">
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
        <label>Company: </label>
        <input type="text" value={company} onChange={(e) => { setCompany(e.target.value) }} />
        <label>Salary: </label>
        <input type="text" value={salary} onChange={(e) => { setSalary(e.target.value) }} />
        <button onClick={formHandle}>submit</button>
      </form>
    </div>
  )
}

export default Edit