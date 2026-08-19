import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./componets/Navbar";
import Dashboard from './pages/Dashboard';
import Estudiante from './pages/Estudiantes';

 function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Navbar>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/estudiante" element={<Estudiante/>}/>
        </Navbar>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;