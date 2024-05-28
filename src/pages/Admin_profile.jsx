import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function Admin_profile() {

  const [edit, setEdit] = useState(false)
  const [data, setData] = useState(null);


  useEffect(() => {
    const localStorageData = localStorage.getItem("pocketbase_auth");

    if (localStorageData) {
      const parsedData = JSON.parse(localStorageData);
      setData(parsedData);
    }
  }, []);

  return (
    <div>
      {/* component */}
      {/* This is an example component */}
      {data && (
        <div>
          <h1 className='text-3xl'>Email: {data.model.email}</h1>

          <div className="h-full">
            <div className="border-b-2 block md:flex">
              <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                <div className="flex justify-between">
                  <span className="text-xl font-semibold block">Admin Profile</span>
                </div>
                <span className="text-gray-600">This information is secret so be careful</span>
                <div className="w-full p-8 mx-2 flex justify-center">
                  <img id="showImage" className="max-w-xs w-32 items-center border" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" alt />
                </div>
              </div>
              <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                <div className="rounded  shadow p-6">
                  <div className="pb-6">
                    <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Name</label>
                    <div className="flex">
                      <span className="border-1 rounded-r px-4 py-2 w-full">{data.model.username}</span>
                    </div>
                  </div>
                  <div className="pb-4">
                    <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Email</label>
                    <div className="flex">
                      <span className="border-1 rounded-r px-4 py-2 w-full">{data.model.email}</span>
                    </div>
                  </div>
                  <div className="pb-4">
                    <Link className='px-4 py-2 text-white bg-green-500' to={`edit/${data.model.id}`}>Edit </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      )}
      {/* edit form  */}
      {/* {edit ? <div onClick={() => setEdit(!edit)} className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

      <div className={edit ? 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-full bg-white z-10 duration-300' : 'absolute top-0 left-[-100%] w-[300px] h-full bg-white z-10 duration-300'}>
        <AiOutlineClose onClick={() => setEdit(!edit)} size={30} className='absolute right-4 top-4 cursor-pointer' />

        <h2 className='text-2xl p-4'>
          Edit Profile
        </h2>

        <div className="">
          <form action="">
            <div className="px-3 mb-3">
              <label htmlFor="" className='font-semibold '>User name:</label>
              <div>
                <input type="text" className='border-blue-600 mt-2 outline-black p-1 focus:border-black' />
              </div>
            </div>
            <div className="px-3 mb-3">
              <label htmlFor="" className='font-semibold '>Email</label>
              <div>
                <input type="text" className='border-blue-600 mt-2 outline-black p-1 focus:border-black' />
              </div>
            </div>
            <div className="px-3 mb-3">
              <label htmlFor="" className='font-semibold '>Change Password:</label>
              <div>
                <input type="text" className='border-blue-600 mt-2 outline-black p-1 focus:border-black' />
              </div>
            </div>
            <div className="px-3 mb-3">
              <label htmlFor="" className='font-semibold '>Confirm Password:</label>
              <div>
                <input type="text" className='border-blue-600 mt-2 outline-black p-1 focus:border-black' />
              </div>
            </div>

          </form>
        </div>

        <div className="flex gap-4 px-3">
          <button className='px-4 py-2 text-white bg-blue-500 rounded' >Update</button>
          <button className='py-2 text-blue-950 font-semibold ' onClick={() => setEdit(!edit)}>Close</button>

        </div>
      </div> */}


    </div>
  )
}

export default Admin_profile