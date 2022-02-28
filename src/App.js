import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import { Rectangle } from './Mycomponent/Rectangle';
import { Detail } from './Detail';
import './detail.css'


function App() {
  return (
    <div className="background-image">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Rectangle />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
     
      </BrowserRouter>
      
    </div>
  )
}
export default App;
