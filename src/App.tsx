import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import AreasOfFocus from "./pages/AreasOfFocus";
import Science from "./pages/Science";
import News from "./pages/News";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/areasoffocus" element={<AreasOfFocus />} />
        <Route path="/science" element={<Science />} />
        <Route path="/news" element={<News />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
