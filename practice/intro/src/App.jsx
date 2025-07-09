import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import Fake from "./pages/Fake";

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-gray-50 p-3">
        <Header />
        <HamburgerMenu />
        <Routes>
          <Route path="/blog" element={<Fake />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
