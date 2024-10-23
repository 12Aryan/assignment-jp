import { useState } from "react";
import CalendarIcon from "../../icons/CalendarIcon";
import { useSelector } from "react-redux";
import User3 from "../../icons/User3";
import DotIcon from "../../icons/DotIcon";

const TableComponent = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState({});
  const mode = useSelector((state) => state.toggleTheme.theme);

  const data = [
    {
      orderId: "#CM9801",
      user: "Natali Craig",
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
    },
    {
      orderId: "#CM9802",
      user: "Kate Morrison",
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
    },
    {
      orderId: "#CM9803",
      user: "Drew Cano",
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
    },
    {
      orderId: "#CM9804",
      user: "Orlando Diggs",
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
    },
    {
      orderId: "#CM9805",
      user: "Andi Lane",
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
    },
  ];

  const headers = ["Order Id", "User", "Project", "Address", "Date", "Status"];

  const statusColors = {
    "In Progress": "#8A8CD9",
    Complete: "#4AA785",
    Pending: "#59A8D4",
    Approved: "#FFC555",
    Rejected: "#db1b1b",
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const allSelected = !selectAll;
    const updatedRows = {};
    data.forEach((item, index) => {
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

  return (
    <div className="overflow-x-auto overflow-y-auto max-h-96">
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
                className="px-3 py-2 text-[#1C1C1C66] dark:text-[#FFFFFF66] text-sm font-normal"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="border-b border-[#1C1C1C0D] dark:border-[#FFFFFF1A] hover:bg-[#F7F9FB] hover:dark:bg-[#FFFFFF0D] cursor-pointer relative"
              onMouseEnter={() =>
                (document.getElementById(`checkbox-${index}`).style.opacity =
                  "1")
              }
              onMouseLeave={() => {
                if (!selectedRows[index]) {
                  document.getElementById(`checkbox-${index}`).style.opacity =
                    "0";
                }
              }}
            >
              <td className="px-4 py-2 relative">
                <input
                  id={`checkbox-${index}`}
                  type="checkbox"
                  checked={selectedRows[index] || false}
                  onChange={() => handleRowSelect(index)}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer opacity-0 transition-opacity"
                />
              </td>
              <td className="px-4 py-2 text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal  ">
                {item.orderId}
              </td>
              <td className="px-4 py-2 text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal  ">
                <div className="flex gap-2 items-center">
                  {<User3 />} {item.user}
                </div>
              </td>
              <td className="px-4 py-2 text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal  ">
                {item.project}
              </td>
              <td className="px-4 py-2 text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal  ">
                {item.address}
              </td>
              <td className="px-4 py-2 text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal  ">
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
                className="px-4 py-2 text-sm font-normal"
                style={{ color: statusColors[item.status] }}
              >
                <div className="flex items-center gap-1">
                  <DotIcon fill={statusColors[item.status] || "#000000"} />{" "}
                  {/* Fallback color for dot */}
                  {item.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
