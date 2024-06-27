import { HelmetProvider } from 'react-helmet-async';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter,
  Routes,
  Navigate ,
  Route,
  // Link,

} from "react-router-dom";

function App() {
  const user = true;
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={user ? <Navigate  to="/"/>:<Login />} />

          <Route path="/signup" element={user ? <Navigate  to="/"/>:<Register />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>

  );
}

export default App;
