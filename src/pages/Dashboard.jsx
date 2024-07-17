import React, { useState } from 'react'

function Dashboard() {

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    gender: "",
    language: [] // Ensure this is an array
  })

  const [isEdit, setIsEdit] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState({})

  const handelChange = (e) => {
    const { value, type, checked, name } = e.target
    if (type === "checkbox") {
      setFormData(prevState => {
        if (checked) {
          return { ...prevState, [name]: [...prevState[name], value] }
        } else {
          return { ...prevState, [name]: prevState[name].filter(lang => lang !== value) }
        }
      })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handelDelete = (id) => {
    const newData = data?.filter(item => item.id !== id)
    setData(newData)
  }

  const handelEdit = (id) => {
    const getData = data.find(item => item.id === id)
    setFormData(getData)
    setIsEdit(true)
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!validation()) {
      return;
    }

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
      gender: "",
      language: [] // Reset to an empty array
    });
  };

  function validation() {
    let formError = {}

    if (!formData.name) formError.name = "Name is required"
    if (!formData.email) formError.email = "email is required"
    if (!formData.password) formError.password = "password is required"
    if (!formData.confirm_password) formError.confirm_password = "confirm password is required"
    if (formData.password !== formData.confirm_password) formError.confirm_password = "password not match"
    if (!formData.gender) formError.gender = "Gender is required";
    if (formData.language.length == 0) formError.language = "At least one language is required";

    setError(formError)
    return Object.keys(formError).length === 0;

  }

  return (
    <>
      <div>
        <form action="" onSubmit={handelSubmit}>
          <div className='d-flex p-2'>
            <div className="form-group mx-2">
              <label htmlFor="name">Name :</label>
              <input name='name' value={formData.name} onChange={handelChange} type="text" className="form-control" id="name" />
              {error.name && <p className='text-red-500'>{error.name}</p>}
            </div>
            <div className="form-group mx-2">
              <label htmlFor="email">Email:</label>
              <input name='email' type="email" value={formData.email} onChange={handelChange} className="form-control" id="email" />
              {error.email && <p className='text-red-500'>{error.email}</p>}

            </div>
            <div className="form-group mx-2">
              <label htmlFor="pwd">Password:</label>
              <input name='password' type="password" value={formData.password} onChange={handelChange} className="form-control" id="pwd" />
              {error.password && <p className='text-red-500'>{error.password}</p>}

            </div>
            <div className="form-group mx-2">
              <label htmlFor="pwd1">Confirm Password:</label>
              <input name='confirm_password' type="password" value={formData.confirm_password} onChange={handelChange} className="form-control" id="pwd1" />
              {error.confirm_password && <p className='text-red-500'>{error.confirm_password}</p>}

            </div>
          </div>
          <div className="form-group mx-2 gap-2 my-2 flex">
            <label htmlFor="male">
              <input type="radio" onChange={handelChange} name='gender' checked={formData.gender === "male"} value={"male"} id='male' />
              Male
            </label>
            <label htmlFor="female">
              <input type="radio" name='gender' onChange={handelChange} checked={formData.gender === "female"} value={"female"} id='female' />
              Female
            </label>
          </div>
          {error.gender && <p className='text-red-500'>{error.gender}</p>}

          <br />
          <div className="form-group mx-2 gap-2 my-2 flex">
            <label htmlFor="hindi">
              <input type="checkbox" onChange={handelChange} name='language' checked={formData.language.includes("hindi")} value={"hindi"} id='hindi' />
              Hindi
            </label>
            <label htmlFor="english">
              <input type="checkbox" onChange={handelChange} name='language' checked={formData.language.includes("english")} value={"english"} id='english' />
              English
            </label>
            <label htmlFor="gujarati">
              <input type="checkbox" onChange={handelChange} name='language' checked={formData.language.includes("gujarati")} value={"gujarati"} id='gujarati' />
              Gujarati
            </label>
          </div>
          {error.language && <p className='text-red-500'>{error.language}</p>}


          <button type="submit" className="btn btn-primary">{isEdit ? "Update" : "Submit"}</button>
        </form>
        <hr className='my-3' />
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Language</th>
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
                    <td>{item.gender}</td>
                    <td>{item.language.join(", ")}</td>
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

export default Dashboard;
