import React from 'react';
import './App.css';
import { BrowserRouter as Router,
  Route,
  Switch
 } from 'react-router-dom'
 import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin"  component={Admin} />
        <Route path="/checkout"  component={Checkout} />
        <Route path="/checkin"  component={Checkin} />
      </Switch>
  </Router>
  )
  
}

export default App;

const Home = ()=>{
  return (
    <>
      <h1>This is the Home page</h1>
    </>
  )
}

const Admin = ()=>{
  return (
    <>
      <h1>This is the admin page</h1>
    </>
  )
}

const Checkout = ()=>{
  return (
    <>
      <h1>Checkout Page</h1>
    </>
  )
}

const Checkin = ()=>{
  return (
    <>
      <h1>Checkin Page</h1>
    </>
  )
}