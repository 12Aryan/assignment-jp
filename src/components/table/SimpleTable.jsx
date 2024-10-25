import React from "react";

const SimpleTable = ({ tableData, headers }) => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr className="border-b border-[#1C1C1C33]">
          {headers.map((header, index) => (
            <th
              key={index}
              className="py-2 px-3 text-xs font-normal text-[#1C1C1C66] dark:text-[#FFFFFF66]"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr
            key={index}
            className="hover:bg-[#F7F9FB] dark:hover:bg-[#FFFFFF0D]"
          >
            <td className="py-2 px-3 text-[12px] font-[400] text-[#1C1C1C] dark:text-[#FFFFFF] ">
              {item.name}
            </td>
            <td className="py-2 px-3 text-[12px] font-[400] text-[#1C1C1C] dark:text-[#FFFFFF] ">
              {item.price}
            </td>
            <td className="py-2 px-3 text-[12px] font-[400] text-[#1C1C1C] dark:text-[#FFFFFF] ">
              {item.quantity}
            </td>
            <td className="py-2 px-3 text-[12px] font-[400] text-[#1C1C1C] dark:text-[#FFFFFF] ">
              {item.amount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SimpleTable;
