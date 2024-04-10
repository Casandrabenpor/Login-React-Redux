import { Route, Routes } from "react-router-dom";
import React from "react";
import { LoginPage } from "./pages/loginPage";
import { AdminPage } from "./pages/adminPage";

function App() {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin/phones" element={<AdminPage />} />
      </Routes>
      
    );
  }
  
  export default App;