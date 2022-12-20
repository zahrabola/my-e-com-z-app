import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      
<Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/contact" />
          <Route path="/cart" />
        </Routes>
  
    </div>
  );
}

export default App;
