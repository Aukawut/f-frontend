import React, { useState, useEffect } from "react"
import axios from "axios"
const App = () => {
  const [users, setUser] = useState([])
  const getUser = async () => {
    const response = await axios.get(import.meta.env.VITE_API + "/users")
    // setUser(response.data);
    setUser(response.data)
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <div>
      <ul>
        {users.map((val, i) => {
          return (
            <>
              <li key={i}>
                {val.id} {val.name} {val.email}
              </li>
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default App
