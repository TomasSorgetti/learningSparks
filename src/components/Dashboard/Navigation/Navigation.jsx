import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem("token")
        navigate("/dashboard")
    }
  return (
    <div>
      <h1>logo</h1>
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/add-new-blog">Add New Blog</Link>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}

export default Navigation