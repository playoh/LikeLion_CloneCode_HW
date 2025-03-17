import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";


import Header from "./components/HeaderComponents.js";
import Footer from "./components/FooterComponents.js";
import Main from "./pages/Main.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
