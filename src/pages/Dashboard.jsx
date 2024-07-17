import React, { useState } from 'react'

function Dashboard() {

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  })
  const [isEdit, setIsEdit] = useState(false)
  const [data, setData] = useState([])

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handelDelete = (id) => {
    // console.log(id)
    const newData = data?.filter(item => item.id !== id)
    setData(newData)
  }

  const handelEdit = (id) => {
    const getData = data.find(item => item.id === id)
    // console.log(getData)
    setIsEdit(true)
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      const updatedData = data.map(item =>
        item.id === formData.id ? formData : item
      );
      setData(updatedData);
      setIsEdit(false);
    } else {
      const newData = { ...formData, id: new Date().getTime().toString() };
      setData([...data, newData]);
    }
    setFormData({
      id: "",
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };


  return (
    <>
      <div>
        <form action="" onSubmit={handelSubmit}>
          <div className='d-flex p-2'>
            <div className="form-group mx-2">
              <label htmlFor="name">Name :</label>
              <input name='name' value={formData.name} onChange={handelChange} type="text" className="form-control" id="name" />
            </div>
            <div className="form-group mx-2">
              <label htmlFor="email">Email:</label>
              <input name='email' type="email" value={formData.email} onChange={handelChange} className="form-control" id="email" />
            </div>
            <div className="form-group mx-2">
              <label htmlFor="pwd">Password:</label>
              <input name='password' type="password" value={formData.password} onChange={handelChange} className="form-control" id="pwd" />
            </div>
            <div className="form-group mx-2">
              <label htmlFor="pwd1">Confrirm Password:</label>
              <input name='confirm_password' type="password" value={formData.confirm_password} onChange={handelChange} className="form-control" id="pwd1" />
            </div>

          </div>
          <button type="submit" className="btn btn-primary">{isEdit ? "update" : "submit"}</button>
        </form>
        {/* ======================================= */}
        <hr className='my-3' />
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>

            </tr>
          </thead>
          <tbody>
            {
              data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td className='d-flex gap-2'>
                      <button className='btn btn-success' onClick={() => handelEdit(item.id)}>Edit</button>
                      <button className='btn btn-danger' onClick={() => handelDelete(item.id)}>Delete</button>
                    </td>

                  </tr>

                )
              })
            }

          </tbody>
        </table>

      </div>
    </>
  )
}

export default Dashboard