import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import { Routes, Route } from "react-router-dom";
import About from './Pages/About';
import SolutionsDetail from './Pages/SolutionsDetail';
import Industries from './Pages/Industries';
import IndustryDetail from './Pages/IndustriesDetail';

const App = () => {
  return (
    <div>
     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/about' element={<About/>}/>
      <Route path="/service/:id" element={<SolutionsDetail/>}/>
      <Route path="/industries" element={<Industries />} />
      <Route path="/industry/:id" element={<IndustryDetail />} />
    </Routes>
    </div>
  )
}

export default App
