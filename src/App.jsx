import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./Pages/Applayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Applayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
