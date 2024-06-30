import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";

import Xidmetler from "../Pages/Xidmetler/Xidmetler";
import Tarifler from "../Pages/Tarifler/Tarifler";
import Haqqımızda from "../Pages/Haqqımızda/Haqqımızda";
import Filiallar from "../Pages/Filiallar/Filiallar";
import Mağazalar from "../Pages/Mağazalar/Mağazalar";
import Xəbərlər from "../Pages/Xəbərlər/Xəbərlər";
import Suallar from "../Pages/Suallar/Suallar";
import Condition from "../Companents/Condition/Condition";
import Information from "../Companents/Information/Information";
import Register from "../Companents/Register/Register";
import Login from "../Companents/Login/Login";
import ForgotPassword from "../Companents/ForgotPassword/ForgotPassword";
import News from "../Companents/News/News";
import Qeydiyyat from "../Pages/Qeydiyyat/Qeydiyyat";
import Dashboard from "../Companents/Dashboard/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarifler" element={<Tarifler />} />
        <Route path="/xidmətlər" element={<Xidmetler />} />
        <Route path="/haqqımızda" element={<Haqqımızda />} />
        <Route path="/filiallar" element={<Filiallar/>} />
        <Route path="/mağazalar" element={<Mağazalar />} />
        <Route path="/xəbərlər" element={<Xəbərlər />} />
        <Route path="/suallar" element={<Suallar />} />
        <Route path="/daşınma şərtləri" element={<Condition />} />
        <Route path="/information" element={<Information />} />
        <Route path="/qeydiyyat" element={<Qeydiyyat />} />
        <Route path="/daxil ol" element={<Login />} />
        <Route path="/daxil ol/forgot" element={<ForgotPassword />} />
        <Route path="/xəbərlər" element={<News />} />
        <Route path="/admin-panel" element={<Dashboard />} />
      
      
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
