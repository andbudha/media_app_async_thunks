import { useState } from 'react'
import './App.css'
import { UsersList } from './components/UsersList'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <UsersList/>
      </div>
  )
}

export default App
