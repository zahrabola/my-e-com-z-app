import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import { ShopContextProvider } from "./context/ContextShop";


function App() {
  return (
    <div className="App">
       <ShopContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/contact" />
        <Route path="/cart" element={<Cart />} />
      </Routes>
       </ShopContextProvider>
    </div>
  );
}

export default App;
