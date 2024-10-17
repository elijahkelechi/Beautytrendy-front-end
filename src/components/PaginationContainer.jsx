import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const PaginationContainer = () => {
  const { totalPages, currentPage } = useLoaderData();
  console.log("totalPages:", totalPages, "currentPage:", currentPage);

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber); // Set page number
    searchParams.set("limit", 10); // Set limit (you can adjust the limit value as needed)
    navigate(`${pathname}?${searchParams.toString()}`); // Update URL with both parameters
    console.log(pageNumber); // Log the page number to ensure it's being called correctly
  };

  return (
    <div className="mt-2 mb-4 flex justify-center px-1">
      <div className="join">
        <button
          className="btn btn-sm md:btn-lg btn-info text-white capitalize join-item"
          onClick={() => {
            const prevPage = currentPage > 1 ? currentPage - 1 : totalPages;
            handlePageChange(prevPage);
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
          className="btn btn-sm md:btn-lg btn-info text-white capitalize join-item"
          onClick={() => {
            const nextPage = currentPage < totalPages ? currentPage + 1 : 1;
            handlePageChange(nextPage);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
