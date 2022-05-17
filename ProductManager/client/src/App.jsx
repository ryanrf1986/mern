import './App.css';
import Main from './views/Main';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Detail from './views/Detail'

function App() {
  return (
    <BrowserRouter>
      <legend>App.jsx</legend>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:product_id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
