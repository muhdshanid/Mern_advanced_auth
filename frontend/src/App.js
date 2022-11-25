import React from "react";
import Header from "./Components/Header";
import {Routes,Route} from 'react-router-dom'
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Welcome from "./Components/Welcome";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn)
  console.log(isLoggedIn);
  return (
    <React.Fragment>
   <header>
    <Header/>
   </header>
   <main>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
     {isLoggedIn && <Route path="/user" element={<Welcome/>} />}
    </Routes>
   </main>
   </React.Fragment>
  );
}

export default App;
