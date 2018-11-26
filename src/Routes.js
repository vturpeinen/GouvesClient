import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containers/Singup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import HomePage from "./HomePage"

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={HomePage}/>
    <AppliedRoute path="/Admin" exact component={Home} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute path="/Content/new" exact component={NewNote} props={childProps} />
    <AuthenticatedRoute path="/Content/:id" exact component={Notes} props={childProps} />  
    <Route component={NotFound} />
    
  </Switch>;