import {Browser as Router, Routes, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/contact" />
          <Route path="/cart" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
