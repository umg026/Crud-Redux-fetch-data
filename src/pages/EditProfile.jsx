import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import pb from '../pb/pb';

function EditProfile() {
    const { id } = useParams();
    const redirect = useNavigate();

    const [formvalue, setFormvalue] = useState({
        username: "",
        email: "",
        status: ""
    })

    const fetchData = async () => {
        const res = await axios.get(`http://127.0.0.1:8090/api/collections/users/records/${id}`);
        setFormvalue(res.data)
    }
    useEffect(() => {
        fetchData();
    }, []);

    function validation() {
        var res = true;
        if (formvalue.username == "") {
            alert("user Name Field is required !");
            res = false;
            return false;
        }
        if (formvalue.email == "") {
            alert("Add img url Field is required !");
            res = false;
            return false;
        }
        if (formvalue.status == "") {
            alert("status Field is required !");
            res = false;
            return false;
        }

        return res;
    }

    const handelChnage = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value })
        console.log(formvalue);
    }

    const handelSubmit = async (e) => {
        e.preventDefault()
        if (validation()) {
            const record = await pb.collection('users').update(`${id}`, formvalue);
            setFormvalue({ ...formvalue, username: "", email: "", status: "" })
            redirect("/admin/profile")
            // console.log(record);
        }
    }



    return (
        <div>
            <h2>Edit Categories</h2>
            <form action="" method="post" onSubmit={handelSubmit}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Username:</label>
                    <input type="text" value={formvalue.username} onChange={handelChnage} name="username" className="form-control" placeholder="Enter Categories Name" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="pwd" className="form-label">Email:</label>
                    <input type="email" value={formvalue.email} onChange={handelChnage} name="email" className="form-control" placeholder="Enter Img url" />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="pwd" className="form-label">status:</label>
                    <input type="text" value={formvalue.status} onChange={handelChnage} name="status" className="form-control" placeholder="Enter Img url" />
                </div>

                <button type="submit" className="btn btn-primary mt-5">Submit</button>
            </form>
        </div>
    )
}

export default EditProfile