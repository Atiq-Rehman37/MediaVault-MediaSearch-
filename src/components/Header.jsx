import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <Link to="/">
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Media<span className="text-indigo-500">Vault</span>
            </h1>
            <span className="text-xs text-gray-400">
              Search photos & videos instantly
            </span>
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-gray-400 text-sm">
          <span>Powered by APIs</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
