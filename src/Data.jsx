import React from 'react'
import { useState } from 'react'

function Data() {
    const [tableData, setTableData] = useState([]);
    const [editClick, setEditClick] = useState(false);
    const [updateData, setUpdateData] = useState({})
    const [inputs, setInput] = useState({
        email: "",
        password: "",
        id: ""
    });
    const handelChange = (e) => {
        setInput({ ...inputs, [e.target.name]: e.target.value })
    }

    const handelSubmit = (e) => {
        e.preventDefault();                                                                                                                  
        if (editClick) {
            inputs.id = updateData.id // id not get thats why .....
            setTableData((prev) => prev.map((item) => (item.id === updateData.id)? inputs: item))
            setEditClick(false)
            setInput({ ...inputs, email: "", password: "" })
            return;
        }
        inputs.id = new Date().getTime().toString()
        setTableData([...tableData, inputs])
        setInput({ ...inputs, email: "", password: "" })
    }
    
    // delete 
    const handelDelete = (id) => {
        const filter = tableData.filter((item) => item.id !== id)
        setTableData(filter);
        //  console.log(setTableData);
        setInput({ ...inputs, email: "", password: "" })
    }


    // edit 
    const handelEdit = (id) => {
        const newData = tableData.filter((item) => item.id == id)
        console.log(newData);
        setEditClick(true)
        setUpdateData(newData[0])

        setInput({
            email: newData[0].email,
            password: newData[0].password

        })
    }
    return (
        <>
            <div className="container mt-3">
                <form onSubmit={handelSubmit}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email">Email:</label>
                        <input value={inputs.email} onChange={handelChange} type="email" className="form-control" placeholder="Enter email" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd">Password:</label>
                        <input value={inputs.password} onChange={handelChange} type="password" className="form-control" placeholder="Enter password" name="password" />
                    </div>
                    {
                        <button type="submit" className="btn btn-primary">{editClick ? "update" : "submit"} </button>
                    }


                </form>
            </div>
            {/* ================================== */}
            <table className="table container">
                <thead>
                    <tr>
                        <th>no.</th>
                        <th>email</th>
                        <th>password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handelDelete(item.id)}>Delete</button>
                                        <button className="btn btn-success mx-2" onClick={() => handelEdit(item.id)}>edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </>
    )
}

export default Data