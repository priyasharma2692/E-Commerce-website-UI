import React from 'react';

import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop.js';
import ShopCategory from "./Pages/ShopCategory.js"
import Product from "./Pages/Product.js";
import Cart from "./Pages/Cart.js";
import LoginSignup from "./Pages/LoginSignup.js";
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kid_banner from'./Components/Assests/banner_kids.png'
function App() {
  return (
    
      <div>
        <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/men' element={<ShopCategory banner={men_banner}category="men"/>}></Route>
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
        <Route path='/kids' element={<ShopCategory banner={kid_banner}category="kid"/>}></Route>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}></Route>
        </Route>
        
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<LoginSignup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    
      </div>

    
  );
}

export default App;
