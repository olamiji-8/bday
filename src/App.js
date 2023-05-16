import React from "react";
import Homepage from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import Kehinde from "./pages/Kehinde/Kehinde";
import Taiwo from "./pages/Taiwo/Taiwo";

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Homepage />}  />
        <Route path="/taiwo" element={<Taiwo />} />
        <Route path="/kehinde" element={<Kehinde />} />
      </Routes>
    </div>
  );
};

export default App;
