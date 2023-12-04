import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to='/shopping-list'>Shopping List</Link>
    </>
  )
}

export default App
