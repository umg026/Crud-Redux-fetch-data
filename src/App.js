import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodo } from './redux/slices/todoSlice'

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  // console.log(state);
  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch])

  if (state.todo.isLoading) {
    return <h1>Loading .......</h1>
  }

  return (
    <>
     
      <ul>
        {state.todo.data?.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))}
      </ul>
    </>
  )
}

export default App
