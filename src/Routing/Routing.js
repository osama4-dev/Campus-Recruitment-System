import React from "react";
import {  Switch, Route,Redirect } from "react-router-dom";
import Student from '../Student/Student'
import Company from '../Company/Company'
import Login from '../Login/Login'
import StudentDashboard from '../Student/Dashboard/StudentDashboard'
import CompanyDashboard from '../Company/Dashboard/CompanyDashboard'
  


function Routing() {
  return <div>
      
      <Switch>

      <Route path="/Student" component={Student}/>
        
      <Route path="/Company" component={Company}/>
        
      <Route path="/Login" component={Login}/>

      <Route path="/StudentDashboard" component={StudentDashboard}/>

      <Route path="/CompanyDashboard" component={CompanyDashboard}/>

      
        
      <Redirect to="/Login"/>


      </Switch>
      
      
  </div>;
}

export default Routing;
