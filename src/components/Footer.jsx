import React from "react";
import { FaGithub, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-800 bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">MediaVault</span>. All rights
          reserved.
        </p>

        <p className="text-sm flex items-center justify-center gap-1 text-center">
          Built with <FaHeart className="text-red-500" /> using React & Redux
        </p>

        <div className="flex justify-center md:justify-end">
          <a
            href="https://github.com/Atiq-Rehman37/MediaVault-MediaSearch-.git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 pb-4">
        Media powered by Unsplash & Pexels
      </div>
    </footer>
  );
};

export default Footer;
