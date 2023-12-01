import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem("token")
        navigate("/dashboard")
    }
  return (
      <div>
          <h1>logo</h1>
        <button onClick={handleLogOut}>Logout</button>
      </div>
  )
}

export default Navigation