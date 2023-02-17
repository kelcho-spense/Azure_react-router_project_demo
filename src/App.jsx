import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HeaderComponent from './HeaderComponent';
import Homepage from './Homepage';
import About from './About';
import NotFound from './NotFound';
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const aboutPage = () => {
  return (
    <p>About Page</p>
  )
};

export default App;
