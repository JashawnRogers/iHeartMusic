import React from 'react'
import useAuth from '../hooks/useAuth'



const Dashboard = ({ code, state }) => {
  const accessToken = useAuth(code)
  return (
    
    <div>{code}</div>
    
  )
}

export default Dashboard