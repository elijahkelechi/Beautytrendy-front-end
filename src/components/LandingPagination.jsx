import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const LandingPagination = () => {
  const { totalPages, currentPage } = useLoaderData();
  console.log("totalPages:", totalPages, "currentPage:", currentPage);

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const { search } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber); // Set page number
    searchParams.set("limit", 10); // Set limit (you can adjust the limit value as needed)
    navigate(`/products?${searchParams.toString()}`); // Update URL with both parameters
    console.log(pageNumber); // Log the page number to ensure it's being called correctly
  };

  // If there's less than 2 pages, don't render pagination
  if (totalPages < 2) return null;

  return (
    <div className="mt-2 mb-0 flex justify-center px-1">
      <div className="join">
        <button
          className="btn btn-sm md:btn-lg btn-info text-gray-200 capitalize join-item"
          onClick={() => {
            handlePageChange(1);
          }}
        >
          prev
        </button>
        {pages.map((pageNumbers) => (
          <button
            key={pageNumbers}
            onClick={() => handlePageChange(pageNumbers)} // Pass pageNumbers correctly
            className={`btn btn-sm md:btn-lg join-item ${
              pageNumbers === currentPage ? "bg-blue-500 text-white" : ""
            }`}
          >
            {pageNumbers}
          </button>
        ))}
        <button
          className="btn btn-sm md:btn-lg btn-info text-gray-200 capitalize join-item"
          onClick={() => {
            handlePageChange(2);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default LandingPagination;
