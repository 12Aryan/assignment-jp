import React from "react";
import PageleftIcon from "../../icons/PageleftIcon";
import PagesRightIcon from "../../icons/PagesRightIcon";

const Pagination = ({ currentPage, totalPages, handlePageChange, mode }) => {
  return (
    <div className="flex w-full justify-end mt-4">
      <div className="flex gap-1">
        <div
          className="cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-2 rounded-lg"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <PageleftIcon {...mode === "dark" && { fill: "#FFFFFF" }} />
        </div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber =>
          <div
            key={pageNumber}
            className={`cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] text-[#1C1C1C] dark:text-[#FFFFFF] rounded-lg w-9 h-9 items-center justify-center flex ${currentPage ===
            pageNumber
              ? "bg-[#1C1C1C0D] dark:bg-[#FFFFFF1A]"
              : ""}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            <span>
              {pageNumber}
            </span>
          </div>
        )}
        <div
          className="cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-2 rounded-lg"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <PagesRightIcon {...mode === "dark" && { fill: "#FFFFFF" }} />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
