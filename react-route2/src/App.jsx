import { Routes, Route } from "react-router-dom";
// import Welcome from './Welcome.jsx'
// import Login from "./Login.jsx";
// import Dashboard from "./Dashboard.jsx";
// import Movies from "./Movies.jsx";
// import MovieDetails from "./MovieDetails.jsx";
// import Checkout from "./Checkout.jsx";
// import Success from "./Success.jsx";
import Users from "./Users.jsx";
import UserDetails from "./UserDetails.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/user/:id" element={<UserDetails />} />
    </Routes>
  );
}
    // <Routes>
    //   <Route path="/movies" element={<Movies />} />
    //   <Route path="/movie/:id" element={<MovieDetails />} />
    // </Routes>
    // <Routes>
    //   <Route path="/welcome/:name" element={<Welcome />} />
    // </Routes>
    // <Routes>
    //   <Route path="/login" element={<Login />} />
    //   <Route path="/dashboard" element={<Dashboard />} />
    // </Routes>
    // <Routes>
    //   <Route path="/checkout" element={<Checkout />} />
    //   <Route path="/success" element={<Success />} />
    // </Routes>
