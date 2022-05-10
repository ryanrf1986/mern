import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Number from "./components/Number"
import Word from "./components/Word"
import Color from "./components/Color"


function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:num" element={<Number />} />
          <Route path= "/:word" element={<Word />} />
          <Route path="/:word/:color/:bgColor" element={<Color />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
