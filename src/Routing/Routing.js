import React from "react";
import {  Switch, Route,Redirect } from "react-router-dom";
import Student from '../Student/Student'
import Company from '../Company/Company'
import Login from '../Login/Login'

// const routes = [
//     {
//       path: "/Student",
//       component: Student
//     },
//     {
//       path: "/Company",
//       component: Company
//     },
//         {
//           path: "/Login",
//           component: Login
//         },
//       ];
  
  


function Routing() {
  return <div>
      
      <Switch>

      <Route path="/Student" component={Student}/>
        
      <Route path="/Company" component={Company}/>
        
      <Route path="/Login" component={Login}/>
        
      <Redirect to="/Login"/>


      </Switch>
      
      
  </div>;
}

export default Routing;
