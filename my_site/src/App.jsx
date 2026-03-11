import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import { Routes, Route } from "react-router-dom";
import About from './Pages/About';
import SolutionsDetail from './Pages/SolutionsDetail';

const App = () => {
  return (
    <div>
     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/about' element={<About/>}/>
      <Route path="/service/:id" element={<SolutionsDetail/>}/>
    </Routes>
    </div>
  )
}

export default App
