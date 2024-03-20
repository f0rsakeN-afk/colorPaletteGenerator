import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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
      <Toaster
        position="top-right"
        reverseOrder="false"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 1000,
          },
          error: {
            duration: 2000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            background: "",
            color: "",
          },
        }}
      />
    </div>
  );
};

export default App;
