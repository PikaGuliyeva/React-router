
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { users } from './Users'

function Users() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>İstifadəçilər Siyahısı</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Vəzifə: {user.role}</p>

          <button onClick={() => navigate(`/user/${user.id}`)}>
            Profilə keç
          </button>
        </div>
      ))}
    </div>
  )
}

export default Users
