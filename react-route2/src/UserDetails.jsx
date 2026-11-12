
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { users } from "./users";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find((item) => item.id === Number(id));

  if (!user) {
    return <h1>İstifadəçi tapılmadı!</h1>;
  }

  return (
    <div>
      <h1>İstifadəçi Profili</h1>
      <h2>Ad: {user.name}</h2>
      <p>ID: {user.id}</p>
      <p>Vəzifə: {user.role}</p>

      <button onClick={() => navigate(-1)}>
        Geri qayıt
      </button>

      <button onClick={() => navigate("/users")}>
        Ana Səhifəyə get
      </button>
    </div>
  );
}

export default UserDetails;
