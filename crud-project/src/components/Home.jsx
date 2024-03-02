import React from 'react'
import CreateUser from './pages/CreateUser'
import Edit from './pages/Edit'
import Users from './pages/Users'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="/create-user">Create User</Link>
        <Link to="/users">Users</Link>

    </div>
  )
}

export default Home