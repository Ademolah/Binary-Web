// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Service";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="pt-20 px-6 min-h-[80vh]">
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

