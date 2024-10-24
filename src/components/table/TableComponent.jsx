import { useState } from "react";
import CalendarIcon from "../../icons/CalendarIcon";
import { useSelector } from "react-redux";
import User3 from "../../icons/User3";
import DotIcon from "../../icons/DotIcon";
import Pagination from "../pagination/Pagination";
import { headers, statusColors, TableData } from "../../data/Data";

const TableComponent = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const mode = useSelector((state) => state.toggleTheme.theme);

  const rowsPerPage = 10;
  const totalPages = Math.ceil(TableData.length / rowsPerPage);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const allSelected = !selectAll;
    const updatedRows = {};
    TableData.forEach((item, index) => {
      updatedRows[index] = allSelected;
    });
    setSelectedRows(updatedRows);
  };

  const handleRowSelect = (index) => {
    setSelectedRows({
      ...selectedRows,
      [index]: !selectedRows[index],
    });
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = TableData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto overflow-y-scroll h-[440px] max-w-full">
        {" "}
        {/* Use overflow-x-auto for horizontal scrolling */}
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#1C1C1C33] dark:border-[#FFFFFF33]">
              <th className="px-3 py-2">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="cursor-pointer"
                />
              </th>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="py-2 text-[#1C1C1C66] dark:text-[#FFFFFF66] text-sm font-normal text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr
                key={index}
                className="border-b border-[#1C1C1C0D] dark:border-[#FFFFFF1A] hover:bg-[#F7F9FB] hover:dark:bg-[#FFFFFF0D] cursor-pointer relative"
                onMouseEnter={() =>
                  (document.getElementById(`checkbox-${index}`).style.opacity =
                    "1")
                }
                onMouseLeave={() => {
                  if (!selectedRows[startIndex + index]) {
                    document.getElementById(`checkbox-${index}`).style.opacity =
                      "0";
                  }
                }}
              >
                <td className="px-3 py-2 relative">
                  <input
                    id={`checkbox-${index}`}
                    type="checkbox"
                    checked={selectedRows[startIndex + index] || false}
                    onChange={() => handleRowSelect(startIndex + index)}
                    className="absolute transform -translate-y-1/2 cursor-pointer opacity-0 transition-opacity"
                  />
                </td>
                <td className="text-left py-2 text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal">
                  {item.orderId}
                </td>
                <td className="text-left py-2 text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal">
                  <div className="flex gap-2 items-center">
                    {<User3 />} {item.user}
                  </div>
                </td>
                <td className="text-left py-2 text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal">
                  {item.project}
                </td>
                <td className="text-left py-2 text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal">
                  {item.address}
                </td>
                <td className="text-left py-2 text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal">
                  <div className="flex gap-1 items-center">
                    {
                      <CalendarIcon
                        {...(mode === "dark" && { fill: "#FFFFFF" })}
                      />
                    }
                    {item.date}
                  </div>
                </td>
                <td
                  className="text-left py-2 text-sm font-normal"
                  style={{ color: statusColors[item.status] }}
                >
                  <div className="flex items-center gap-1">
                    <DotIcon fill={statusColors[item.status] || "#000000"} />
                    {item.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        mode={mode}
      />
    </div>
  );
};

export default TableComponent;
