import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './pages/home/News';

const App = () => {
  return (
    <>
      {/* <button className="btn-primary">Click Me</button> */}
      <Navbar></Navbar>
      <Outlet/>
      <News/>
    </>
    

  );
}

export default App
