import React from "react";
import {
  BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
  import Home from "../screens/home";
  import NotFound from "../screens/notfound";
  import Signup from "../screens/Signup";
  import Login from "../screens/Login";
  import Todo from "../screens/Todo";
  import Navbar from "../components/Navbar";


 function RouterApp() {
  return (
    <>
    <Router>
        <Routes>
            <Route path = "/"  element = {<Home/>}/>
            <Route path = "/login"  element = {<Login/>}/>
            <Route path = "/signup"  element = {<Signup/>}/>
            <Route path = "/todo"  element = {<Todo/>}/>
            <Route path = "*"  element = {<NotFound/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default RouterApp