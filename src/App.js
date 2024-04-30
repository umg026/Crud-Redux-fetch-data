import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchTodos } from './redux/slices/todoSlice'
import { fetchData } from './redux/slices/pocketbase_Slice'



function App() {
  const { isLoading, data } = useSelector((state) => state.pocketbase);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  if (isLoading) {
    return <h1>loading .....</h1>
  }

  return (
    <div>
      <ul>

        {data?.map((e, i) => (
          <li key={i}>{e.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default App