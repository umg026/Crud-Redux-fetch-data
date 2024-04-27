import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Crud() {
    const users = useSelector((state) => state.users)
    return (
        <>
           <div className="d-flex container" style={{justifyContent:"flex-end"}}>
                <Link to="/create" className='btn btn-success'> Create</Link>
           </div>
            <table className="table container">
                <thead>
                    <tr>
                        <th>no.</th>
                        <th>userName</th>
                        <th>email</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Link className='btn btn-primary ' to={`/update/${item.id}`}>Edit</Link>
                                        <button className='btn btn-danger mx-2'>delete</button>
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

export default Crud