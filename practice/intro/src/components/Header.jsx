import React from "react";

const Header = () => {
  return (
    <div>
      <header className="shadow-md z-50 rounded-2xl bg-blue-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/">
            <h1 className="text-5xl font-bold text-blue-800">Introduce💕</h1>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
