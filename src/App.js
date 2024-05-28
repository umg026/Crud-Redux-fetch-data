import React from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// // import { fetchTodos } from './redux/slices/todoSlice'
// import { fetchData } from './redux/slices/pocketbase_Slice'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Admin_profile from './pages/Admin_profile';
import EditProfile from './pages/EditProfile';
import Search from './search_input_add/Search';
import Input_suggestion_post from './input_suggestion/Input_suggestion_post';


function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/profile" element={<Admin_profile />} />
      <Route path="/admin/profile/edit/:id" element={<EditProfile />} />
      <Route path="/search" element={<Search />} />
      <Route path="/input" element={<Input_suggestion_post />} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App