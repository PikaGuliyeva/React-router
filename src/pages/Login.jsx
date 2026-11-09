import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login səhifəsi</h1>

      <button onClick={() => navigate("/dashboard")}>
        Daxil ol
      </button>
    </div>
  );
}

export default Login;