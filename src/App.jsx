import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

import { Routes,Route } from 'react-router-dom';
import BlogDetails  from './Pages/BlogDetails/BlogDetails';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';

 const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<BlogDetails/>}/>
      </Routes>
      <Subscribe/>
      <Footer/>
    </div>
  )
}
export default App;