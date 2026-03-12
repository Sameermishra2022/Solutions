import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import { Routes, Route } from "react-router-dom";
import About from './Pages/About';
import SolutionsDetail from './Pages/SolutionsDetail';
import Industries from './Pages/Industries';
import IndustryDetail from './Pages/IndustriesDetail';
import Insights from './Pages/Insights';
import InsightDetail from './Pages/InsightDetail';
import Career from './Pages/Carrier';
import Expertise from './Pages/Expertise';

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
      <Route path="/insights" element={<Insights />} />
      <Route path="/insight/:id" element={<InsightDetail />} />
      <Route path="/career" element={<Career />} />
      <Route path="/expertise" element={<Expertise />} />
    </Routes>
    </div>
  )
}

export default App
