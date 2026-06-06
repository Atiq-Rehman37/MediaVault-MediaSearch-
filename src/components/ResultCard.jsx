import React from "react";
import { FaBookmark } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCollection } from "../redux/features/collectionSlice";
import { ToastContainer, toast } from "react-toastify";
const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCollections = (item) => {
    dispatch(addToCollection(item));
    toast.success("Item added to collection!");
  };
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <ToastContainer />
      {/* Media */}
      {item.type === "photo" ? (
        <img
          src={item.url}
          alt={item.alt || "Media image"}
          className="w-full h-72 object-cover"
        />
      ) : (
        <video
          src={item.url}
          muted
          loop
          autoPlay
          className="w-full h-72 object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end justify-between opacity-0 group-hover:opacity-100 transition">
        <p className="text-white text-sm line-clamp-2 pr-2">
          {item.alt || "No description available"}
        </p>

        <button
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition cursor-pointer"
          title="Save to Collections"
          onClick={() => addToCollections(item)}
        >
          <FaBookmark size={14} />
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
