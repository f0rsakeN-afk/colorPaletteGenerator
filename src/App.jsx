import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./Pages/Applayout";
import Home from "./Pages/Home";
import Generator from "./Pages/Generator";
import About from "./Pages/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="generator" element={<Generator />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
