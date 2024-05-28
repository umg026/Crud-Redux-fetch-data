import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pocketData } from '../redux/slices/todoSlice'


function Dashboard() {
  const dispatch = useDispatch()
  const { isLoading, data } = useSelector(state => state.todo)
  const [currentPage, setCurentPage] = useState(1)  // for pagination

  useEffect(() => {
    dispatch(pocketData())
  }, [dispatch])

  if (isLoading) {
    return <h1>loading ......</h1>
  }
  // pagination 
  const recordsPerPage = 5;
  const fristIndex = (currentPage - 1) * recordsPerPage // 0
  const lastIndex = currentPage * recordsPerPage // 5
  const records = data?.slice(fristIndex, lastIndex)
  const totoalPages = Math.ceil(data?.length / recordsPerPage)
  const pageNumber = Array.from({ length: totoalPages }, (_, i) => i + 1)

  function prevPage() {
    setCurentPage(prevPage=> prevPage > 1 ? prevPage - 1 : prevPage)
  }
  function nextPage() {
    setCurentPage(prevPage=> prevPage < totoalPages ? prevPage + 1 : prevPage)
  }
  function chnagePage(Id) {
    setCurentPage(Id)
  }

  return (
    <div>

      {/* ====================== */}
      <table className="table container">
        <thead>
          <tr>
            <th>no.</th>
            <th>email</th>
            <th>type</th>
            <th>collection</th>
          </tr>
        </thead>
        <tbody>
          {
            records && records?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.type}</td>
                  <td>{item.collectionName}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>



      <div className="flex">
        <button className={currentPage ===1 ? "bg-gray-700 text-white" : "px-4 bg-green-600 text-white"}
          onClick={prevPage} 
        >Prev</button>

        {
          // commet this code if you want to 
          pageNumber.map(number => (
            <button key={number} className={`flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 ${currentPage === number ? 'bg-gray-900/10' : ''}`}
              onClick={() => chnagePage(number)}
            >{number}</button>
          ))
        }


        <button className='px-4 bg-green-600 text-white'
          onClick={nextPage} disabled={currentPage === totoalPages}
        >Next</button>
      </div>
    </div>
  )
}

export default Dashboard