import './App.css';
import Main from './views/Main';
import Detail from './views/Detail'
import Edit from './views/Edit'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <legend>App.jsx</legend>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:product_id" element={<Detail />} />
        <Route path='/:product_id/edit' element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
