import './App.css';
import React from "react"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
// import People from "./views/People"
// import Planets from "./views/Planets"
import Form from "./components/Form"
import People from "./components/People"

function App() {


  return (
    <div>
      <BrowserRouter>
          <Routes>
          <Route path="/" element={<Form/>}>
            <Route path="/people/:id" element={<People/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;