// import React, { useEffect, useState } from 'react'
// // import PocketBase from 'pocketbase';
// import db from "../db.json"

// function Input_suggestion_post() {
//     // const pb = new PocketBase('http://127.0.0.1:8090');

//     const [data, setData] = useState(null)
//     const [newPer, setNewPer] = useState('')
//     const [selectedItem, setSelectedItem] = useState(null)

//     useEffect(() => {
//         setData(db.items)

//     }, [])

//     const handelCHnage = (e) => {
//         const selectedPermiName = e.target.value;
//         setNewPer(selectedPermiName);
//         const selectedItem = data.find(item => item.permi_name === selectedPermiName);
//         setSelectedItem(selectedItem);
//     }

//     const handelSubmit = (e) => {
//         e.preventDefault()
//         console.log(selectedItem)
//     }

//     return (
//         <>
//             <form action="" onSubmit={handelSubmit}>
//                 <div>
//                     <label htmlFor="">Input : </label>
//                     <br />
//                     <select onChange={handelCHnage} className='border border-black'>
//                         <option value="">Select Permi</option>
//                         {
//                             data && data.map((item, index) => {
//                                 return <option key={index} value={item.permi_name}>{item.permi_name}</option>
//                             })
//                         }
//                     </select>
//                     <button type="submit">Submit</button>
//                 </div>
//             </form>
//         </>
//     )
// }

// export default Input_suggestion_post

// ==================Search with ==========================================
import React, { useEffect, useState } from 'react'
// import PocketBase from 'pocketbase';
import db from "../db.json"

function InputSuggestionPost() {
    // const pb = new PocketBase('http://127.0.0.1:8090');

    const [data, setData] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [selectedItem, setSelectedItem] = useState(null)
    const [showSuggestions, setShowSuggestions] = useState(false)

    useEffect(() => {
        setData(db.items)
    }, [])

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClick = (item) => {
        setInputValue(item.permi_name)
        setSelectedItem(item)
        setShowSuggestions(false)
    }

    const handleFocus = () => {
        setShowSuggestions(true)
    }

    const handleBlur = () => {
        setTimeout(() => {
            setShowSuggestions(false)
        }, 100) // Delay to allow click to register
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(selectedItem)
    }

    return (
        <form onSubmit={handleSubmit} className="relative">
            <div>
                <label htmlFor="inputField" className="block mb-2 text-sm font-medium text-gray-900">Input:</label>
                <input
                    id="inputField"
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="border border-gray-300 p-2 rounded-md w-full"
                />
                {showSuggestions && (
                    <ul className="absolute border border-gray-300 bg-white w-full mt-1 max-h-40 overflow-y-auto rounded-md shadow-lg z-10">
                        {
                        data
                            .filter(item => item.permi_name.toLowerCase().includes(inputValue.toLowerCase()))
                            .map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleClick(item)}
                                    className="p-2 hover:bg-gray-200 cursor-pointer"
                                >
                                    {item.permi_name}
                                </li>
                            ))}
                    </ul>
                )}
            </div>
            <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
        </form>
    )
}

export default InputSuggestionPost;
