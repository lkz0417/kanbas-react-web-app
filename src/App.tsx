import Labs from "./Labs";
import React from "react";
import Kanbas from "./Kanbas";
import Landing from "./Landing";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Kanbas/store";
export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
      
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Landing" />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}


