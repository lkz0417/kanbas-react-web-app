import Labs from "./Labs";
import React from "react";
import Kanbas from "./Kanbas";
import Landing from "./Landing";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Landing" />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}


