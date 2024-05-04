import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Loader from '../loader/Loader';
// import { userData } from '../../redux/Users/Users';

function Admin_profile() {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector(state => state.userData);

  useEffect(() => {
    // dispatch(userData());
  }, [dispatch]);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Handling loading state
  if (isLoading) {
    // return <div className="flex justify-center items-center h-[100vh]"> <Loader /></div>;
  }

  // Pagination logic
  const recordsPerPage = 5;
  const firstIndex = (currentPage - 1) * recordsPerPage;
  const lastIndex = currentPage * recordsPerPage;
  const records = data?.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data?.length / recordsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  function prevPage() {
    setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
  }

  function nextPage() {
    setCurrentPage(prevPage => (prevPage < totalPages ? prevPage + 1 : prevPage));
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Id
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      User Name
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      email
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Type
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Image
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Created
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {records && records.map((item, index) => (
                    <tr key={index} className="bg-white border-b transition duration-300 ease-in-out capitalize hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">{item.username}</td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">{item.email}</td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">{item.name}</td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap w-6">
                        <img src={item.avatar} alt="not found" />
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">{item.created}</td>
                      <td className="p-3 flex">
                        <button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Review</button>
                        <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex w-full mt-16 justify-center items-center gap-3">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Previous
        </button>
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => changePage(number)}
            className={`flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 ${currentPage === number ? 'bg-gray-900/10' : ''}`}
          >
            {number}
          </button>
        ))}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Next
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Admin_profile;
