import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      
<Navbar />
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/contact" />
          <Route path="/cart" />
        </Routes>
  
    </div>
  );
}

export default App;
