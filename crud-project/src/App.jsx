import React from 'react'
import Home from './components/Home'
import { BrowserRouter,Route, Routes } from "react-router-dom";
import CreateUser from './components/pages/CreateUser'
import Users from './components/pages/Users'
import Edit from './components/pages/Edit';

const App = () => {
  return (
         <BrowserRouter>
            <Home/>
            <Routes>
                <Route element={<CreateUser/>} path='/create-user'/>
                <Route element={<Users/>} path='/users'/>
                <Route element={<Edit/>} path='/edit/:ID'/>
            </Routes>
        </BrowserRouter> 
  )
}

export default App