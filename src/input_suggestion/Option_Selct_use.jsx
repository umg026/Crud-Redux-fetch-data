import React, { useEffect, useState } from 'react'
import db from "../db.json"

function Option_Selct_use() {

    const [data, setData] = useState(null)
    const [newPer, setNewPer] = useState('')
    const [selectedItem, setSelectedItem] = useState(null)

    useEffect(() => {
        setData(db.items)

    }, [])

    const handelCHnage = (e) => {
        const selectedPermiName = e.target.value;
        setNewPer(selectedPermiName);
        const selectedItem = data.find(item => item.permi_name === selectedPermiName);
        setSelectedItem(selectedItem);
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(selectedItem)
    }

    return (
        <>
            <form action="" onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="">Input : </label>
                    <br />
                    <select onChange={handelCHnage} className='border border-black'>
                        <option value="">Select Permi</option>
                        {
                            data && data.map((item, index) => {
                                return <option key={index} value={item.permi_name}>{item.permi_name}</option>
                            })
                        }
                    </select>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Option_Selct_use