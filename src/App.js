import React from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// // import { fetchTodos } from './redux/slices/todoSlice'
// import { fetchData } from './redux/slices/pocketbase_Slice'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Admin_profile from './pages/Admin_profile';


function App() {
  // const { isLoading, data } = useSelector((state) => state.pocketbase);
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchData())
  // }, [dispatch])

  // if (isLoading) {
  //   return <h1>loading .....</h1>
  // }

  return (
    // <div>
    //   <ul>

    //     {data?.map((e, i) => (
    //       <li key={i}>{e.email}</li>
    //     ))}
    //   </ul>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/profile" element={<Admin_profile />} />
      
    </Routes>
  </BrowserRouter>
  )
}

export default App