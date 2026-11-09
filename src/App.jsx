// // Task 1
// // import React from 'react'
// // import { Routes, Route, Link } from 'react-router-dom'
// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Projects from "./pages/Projects";
// // import Contact from "./pages/Contact";

// // function App() {
// //   return (
// //     <div>
// //       <nav>
// //         <Link to="/">Home</Link>{" "}
// //         <Link to="/about">About</Link>{" "}
// //         <Link to="/projects">Projects</Link>{" "}
// //         <Link to= "/contact">Contact</Link>
// //       </nav>

// //       <Routes>
// //         <Route path= "/" element={<Home />} />
// //         <Route path= "/about" element={<About />} />
// //         <Route path= "/projects" element={<Projects />} />
// //         <Route path= "/contact" element={<Contact />} />
// //       </Routes>
// //     </div>
// //   )
// // }

// // export default App

// // Task 2
// // import React from "react";
// // import { Routes, Route, NavLink } from "react-router-dom";
// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Projects from "./pages/Projects";
// // import Contact from "./pages/Contact";

// // function App() {
// //   return (
// //     <div>
// //       <nav>
// //         <NavLink
// //           to="/"
// //           end
// //           className={({ isActive }) => (isActive ? "active" : "")}
// //         >
// //           Home
// //         </NavLink>{" "}
// //         <NavLink
// //           to="/about"
// //           className={({ isActive }) => (isActive ? "active" : "")}
// //         >
// //           About
// //         </NavLink>{" "}
// //         <NavLink
// //           to="/projects"
// //           className={({ isActive }) => (isActive ? "active" : "")}
// //         >
// //           Projects
// //         </NavLink>{" "}
// //         <NavLink
// //           to="/contact"
// //           className={({ isActive }) => (isActive ? "active" : "")}
// //         >
// //           Contact
// //         </NavLink>
// //       </nav>

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/projects" element={<Projects />} />
// //         <Route path="/contact" element={<Contact />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;

// // Task 3
// import React from "react";
// import { Routes, Route, NavLink } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";

// function App() {
//   return (
//     <div>
//       <nav>
//         <NavLink
//           to="/"
//           end
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Home
//         </NavLink>{" "}

//         <NavLink
//           to="/about"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           About
//         </NavLink>{" "}

//         <NavLink
//           to="/projects"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Projects
//         </NavLink>{" "}

//         <NavLink
//           to="/contact"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Contact
//         </NavLink>{" "}

//         <NavLink
//           to="/blogs/1"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Blog 1
//         </NavLink>{" "}

//         <NavLink
//           to="/blogs/2"
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Blog 2
//         </NavLink>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/blogs/:id" element={<Blog />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// Task 4
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>{" "}

        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          About
        </NavLink>{" "}

        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
          Projects
        </NavLink>{" "}

        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
          Contact
        </NavLink>{" "}

        <NavLink to="/blogs/1" className={({ isActive }) => (isActive ? "active" : "")}>
          Blog 1
        </NavLink>{" "}

        <NavLink to="/blogs/2" className={({ isActive }) => (isActive ? "active" : "")}>
          Blog 2
        </NavLink>{" "}

        <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
          Login
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
