import React, { useState } from 'react'

function Data1() {
    const [tableData, setTableData] = useState([]);
    const [editClick, setEditClick] = useState(false);
    const [newData, setNewData] = useState()
    const [inputs, setInput] = useState({
        name: "",
        phone: "",
        age: "",
        id: ""
    })

    const handelChange = (e) => {
        setInput({ ...inputs, [e.target.name]: e.target.value })
    }

    const handelSubmit = (e) => {
        e.preventDefault();

        if (editClick) {
            inputs.id = newData.id;
            setTableData((prev) => prev.map((item) => (item.id == newData.id) ? inputs : item))

            setEditClick(false)
            setInput({ ...inputs, name: "", phone: "", age: "" })

            return
        }

        inputs.id = new Date().getTime().toString();
        setTableData([...tableData, inputs])
        setInput({ ...inputs, name: "", phone: "", age: "" })
    }


    const handelDelete = (id) => {
        const delteItem = tableData.filter((item) => item.id !== id);
        setTableData(delteItem)
    }

    const handelEdit = (id) => {
        const editItem = tableData.filter((item) => item.id == id);
        setTableData(editItem)
        setEditClick(true)
        setNewData(editItem[0])
        setInput({
            name: editItem[0].name,
            phone: editItem[0].phone,
            age: editItem[0].age,
        })
    }
    return (
        <>
            <form onSubmit={handelSubmit} className='container'>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">name:</label>
                    <input type="text" value={inputs.name} onChange={handelChange} className="form-control" placeholder="Enter name" name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input type="number" value={inputs.phone} onChange={handelChange} className="form-control" placeholder="Enter phone number" name="phone" />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">age:</label>
                    <input type="number" value={inputs.age} onChange={handelChange} className="form-control" placeholder="Enter age" name="age" />
                </div>

                <button type="submit" className="btn btn-primary">{editClick ? "update" : "submit"}</button>
            </form>
            {/* ========================= */}

            <table className="table table-hover container">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>phone number </th>
                        <th>age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <button className='btn btn-success' onClick={() => handelEdit(item.id)}>edit</button>
                                        <button className='btn btn-danger mx-2' onClick={() => handelDelete(item.id)}>delete</button>
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

export default Data1