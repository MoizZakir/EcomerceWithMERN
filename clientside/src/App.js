import { HelmetProvider } from 'react-helmet-async';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter,
  Routes,
  
  Route,
  Link,
  
} from  "react-router-dom";

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>} />

        <Route path="home" element={<Home/>} />
        
      <Route path="signup" element={<Register />} />
      <Route path="product" element={<Product/>} />
      <Route path="productlist" element={<ProductList/>} />
      <Route path="cart" element={<Cart/>} />
    </Routes>
  </BrowserRouter></HelmetProvider>
  
  );
}

export default App;
