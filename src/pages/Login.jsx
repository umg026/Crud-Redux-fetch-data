import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import pb  from '../pb/pb'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/slices/userSlicer'


function Login() {
    const redirect = useNavigate()
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setError] = useState("")

    const dispatch = useDispatch();
   
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email) {
            setError("please Enter Email");
            return
        }
        if (!password) {
            setError("please Enter the password");
            return
        }

        try {
            const authData = await pb.collection('users').authWithPassword(
                email,
                password,
            );
            console.log(authData);
            dispatch(login({ email, password }));

         

            redirect("/")

        }
        catch (error) {
            console.log(error);
        }
    }


  return (
    <div>
        
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                    <h1 className="font-bold text-center text-2xl mb-5">Login </h1>
                    <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                        <div className="px-5 py-7">
                            <form onSubmit={handleSubmit}>
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                                <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="border-[0.5px] border-black rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />

                                <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} className="border-[0.5px] border-black  rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                {errors && <p className='text-red-600'>{errors}</p>} <br />
                                <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                    <span className="inline-block mr-2">Login</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Login