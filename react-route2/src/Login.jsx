// import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/dashboard");
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={handleUsernameChange}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
