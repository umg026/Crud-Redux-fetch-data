// fetch data using redux and add searching functonalities and add pagination

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pocketData } from '../redux/slices/todoSlice'


function Dashboard() {
  const dispatch = useDispatch()
  const { isLoading, data } = useSelector(state => state.todo)
  const [currentPage, setCurentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    dispatch(pocketData(searchQuery))
  }, [dispatch, searchQuery])

  if (isLoading) {
    return <h1>loading ......</h1>
  }
  // pagination 
  const recordsPerPage = 3;
  const filteredData = data?.filter(item =>
    item.email.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const fristIndex = (currentPage - 1) * recordsPerPage
  const lastIndex = currentPage * recordsPerPage
  const records = filteredData?.slice(fristIndex, lastIndex);
  const totoalPages = Math.ceil(filteredData?.length / recordsPerPage)
  const pageNumber = Array.from({ length: totoalPages }, (_, i) => i + 1)

  const handleSearch = () => {
    dispatch(pocketData(searchQuery));
    setCurentPage(1); // Reset to first page after search
  };

  function prevPage() {
    setCurentPage(prevPage => prevPage > 1 ? prevPage - 1 : prevPage)
  }
  function nextPage() {
    setCurentPage(prevPage => prevPage < totoalPages ? prevPage + 1 : prevPage)
  }
  function chnagePage(Id) {
    setCurentPage(Id)
  }


  return (
    <div>
      <input
        type="text" className='mx-20'
        value={searchQuery} autoFocus
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Enter search query"
      />
      <button onClick={handleSearch}>Search</button>

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
        <button className='px-4 bg-green-600 text-white'
          onClick={prevPage} disabled={currentPage === 1}
        >Prev</button>

        {
          // commet this code if you want to not display numbers  
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