import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import Main from "./pages/Main.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
