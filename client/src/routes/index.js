import React from  'react'
import {Route,BrowserRouter } from 'react-router-dom'
import HelloWorld from '../screens/helloWorld'
import FacebookLogin from '../screens/LoginFacebook'
import GoogleLogin from '../screens/LoginGoogle'

const Routes =()=>(
  <BrowserRouter>
      <Route exact path="/" component={HelloWorld}/>
      <Route exact path="/Loginfacebook" component={FacebookLogin}/>
      <Route exact path="/Logingoogle" component={GoogleLogin}/>


  </BrowserRouter>
)

export default Routes
