import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInputFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="input input-bordered pl-14 pr-4 py-0 md:w-96 rounded-full focus:outline-none focus:ring focus:ring-rose-400 transition-all duration-200"
        placeholder="Search products"
      />

      <button
        onClick={handleSearch}
        type="submit"
        className="absolute btn btn-primary bg-primary inset-y-0 right-0 pl-4 pr-4 rounded-r-full flex items-center"
      >
        <BsSearch className=" text-white text-2xl font-bold animate-bounce" />
      </button>
    </div>
  );
};

export default SearchInputFilter;
