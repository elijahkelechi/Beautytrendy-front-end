import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const MobileSearchInputFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Navigate to products page with the search query as a query parameter
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative flex-grow">
      <input
        type="search"
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown} // Handle Enter key
        className="input input-bordered pl-4 pr-10 py-0 w-full rounded-full focus:outline-none focus:ring focus:ring-lime-400 transition-all duration-200"
        placeholder="Search products"
      />
      <button
        type="submit"
        onClick={handleSearch} // Handle click on search icon
        className="absolute btn btn-primary bg-lime-400 inset-y-0 right-0 pl-2 pr-3 rounded-r-full flex items-center"
      >
        <BsSearch className="text-white fot-bold text-xl animate-bounce" />
      </button>
    </div>
  );
};

export default MobileSearchInputFilter;
