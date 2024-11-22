import React from "react";

interface PaginationBarProps {
  totalPages: number; // Total number of pages
  currentPage: number; // Current active page
  onPageChange: (page: number) => void; // Callback to handle page changes
}

const PaginationBar: React.FC<PaginationBarProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const getPageNumbers = () => {
    const maxVisibleButtons = window.innerWidth < 640 ? 3 : 5; // Show fewer buttons on small screens
    const pageNumbers: number[] = [];
    const half = Math.floor(maxVisibleButtons / 2);

    let start = Math.max(currentPage - half, 1);
    let end = Math.min(start + maxVisibleButtons - 1, totalPages);

    if (end - start < maxVisibleButtons - 1) {
      start = Math.max(end - maxVisibleButtons + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center flex-wrap space-x-2 mt-4">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`px-4 py-2 text-sm rounded-md ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600 text-white"
        }`}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-3 py-2 rounded-md text-sm ${
              currentPage === pageNumber
                ? "bg-orange-500 text-white"
                : "bg-gray-200 hover:bg-orange-100 text-gray-800"
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`px-4 py-2 text-sm rounded-md ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-orange-500 hover:bg-orange-600 text-white"
        }`}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationBar;
