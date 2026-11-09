import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard səhifəsi</h1>

      <button onClick={() => navigate(-1)}>
        Geri qayıt
      </button>
    </div>
  );
}

export default Dashboard;