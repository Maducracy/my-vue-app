import Home from "./Home/Home";

import Shop from "../src/Shop.jsx";
import Help from "../src/Help.jsx";
import FaQ from "../src/FAQ.jsx";
import Contact from "../src/Contact.jsx";
import ShopDetail from "../src/ShopDetail.jsx";
import Login from "../src/Login.jsx";
import Signup from "../src/Signup.jsx";
import HealthBeauty from "./Category/HealthBeauty.jsx";
import HomeGarden from "./Category/HomeGarden.jsx";
import ToyGame from "./Category/ToyGame.jsx";
import Phone from "./Category/Phone.jsx";
import Fashion from "./Category/Fashion.jsx";
import Cartstore from "../src/Component/Cartstore.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
    
        <Route path="/shop" element={<Shop />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/FAQ" element={<FaQ />} />
        <Route path="/Contact" element={<Contact />} />
       <Route path="/product/:id" element={<ShopDetail />} />
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Phone" element={<Phone />}></Route>
        <Route path="/Fashion" element={<Fashion />}></Route>
        <Route path="/Cartstore" element={<Cartstore />}></Route>
        <Route path="/HealthBeauty" element={<HealthBeauty />}></Route>
        <Route path="/HomeGarden" element={<HomeGarden />}></Route>
        <Route path="/ToyGame" element={<ToyGame />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
