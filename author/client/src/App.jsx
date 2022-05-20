import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Dashboard from './Views/Dashboard'
import New from './Views/New'
import Edit from './Views/Edit'




function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/new" element={<New/>}/>
          <Route path="/edit" element={<Edit/>}/>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
