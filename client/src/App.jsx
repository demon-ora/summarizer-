import React from 'react';
import Login from './auth/Login';
import Navbar from './layout/Navbar';
import Signup from './auth/Signup';
import Footer from './layout/Footer';

function App() {
  return (
   <>
   <Navbar/>
    <Login/> 
    <Footer/>
   </>
  );
}

export default App;
