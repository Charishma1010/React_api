/**import { Routes,Route,Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import './Js/Content';
import About from'./Js/About';
import Home from './Js/Home';
import HeaderBar from './Js/HeaderBar';
import Content from './Js/Content';
//import Pages from './Js/Footer';

function App() {
  return (
    <div>
       <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
          <Routes>
            <Route path="/" element={<HeaderBar/>}/>
            <Route path="/about" element={<Content/>}/>
          </Routes>
    </div>
    );
}
export default App;**/
import React from "react";
import "./Js/App1.css";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Consulting from "./Pages/Consulting";
import Contactus from "./Pages/Contactus";
import Design from "./Pages/Design";
import Development from "./Pages/Development";
import Marketing from "./Pages/Marketing";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import Signup from "./Pages/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar>
        <Routes>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contactus" component={Contactus}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/marketing" component={Marketing}></Route>
          <Route path="/development" component={Development}></Route>
          <Route path="/design" component={Design}></Route>
          <Route path="/consulting" component={Consulting}></Route>
        </Routes>
        </Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;

