import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";
import { Link } from "react-router-dom";
import { BsBookmarkHeart } from "react-icons/bs";

const Tabs = () => {
  const tabs = ["Photos", "Videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  const handleTabClick = (tab) => {
    dispatch(setActiveTab(tab));
  };

  return (
    <div className="flex items-center justify-between px-8 bg-gray-950 py-4">
      {/* Tabs */}
      <div className="flex gap-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 border-2 rounded cursor-pointer active:scale-95 transition
              ${
                activeTab === tab
                  ? "bg-blue-700 border-blue-600"
                  : "bg-gray-700 border-gray-600 hover:bg-gray-600"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Collection Button */}
      <Link
        to="/collection"
        className="flex items-center gap-2 px-4 py-2 border-2 border-gray-600 rounded
                   bg-gray-800 hover:bg-gray-700 transition active:scale-95"
      >
        <BsBookmarkHeart className="text-lg text-blue-400" />
        <span>Collection</span>
      </Link>
    </div>
  );
};

export default Tabs;
