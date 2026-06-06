import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div className="px-8 py-6 bg-gray-950">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 focus-within:border-blue-500 transition"
      >
        <FiSearch className="text-gray-400 text-xl" />

        <input
          type="text"
          placeholder="Search photos, videos..."
          required
          value={text}
          onChange={handleChange}
          className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
        />

        <button
          type="submit"
          className="cursor-pointer px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition active:scale-95"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
