import { useSelector } from "react-redux";
import TableComponent from "../../components/table/TableComponent";
import AddIcon from "../../icons/AddIcon";
import FilterIcon from "../../icons/FilterIcon";
import SortingIcon from "../../icons/SortingIcon";
import SearchIcon from "../../icons/SearchIcon";

const OrderList = () => {
  const mode = useSelector((state) => state.toggleTheme.theme);

  return (
    <div className="flex flex-col">
      <span className="dark:text-[#FFFFFF] text-[#1C1C1C] text-sm font-semibold mb-5">
        Order List
      </span>
      <div className="flex flex-col gap-6">
        <div className="flex  p-2 rounded-lg bg-[#F7F9FB] dark:bg-[#FFFFFF0D] justify-between items-center ">
          <div className="flex gap-1">
            <div className="hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-2 rounded-lg cursor-pointer ">
              <AddIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />
            </div>
            <div className="hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-2 rounded-lg cursor-pointer ">
              <FilterIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />
            </div>
            <div className="hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] p-2 rounded-lg cursor-pointer ">
              <SortingIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />
            </div>
          </div>
          <div className="flex items-center h-7 bg-[#FFFFFF66] dark:bg-[#1C1C1C66] px-2 py-1 rounded-lg border border-[#1C1C1C1A] dark:border-[#FFFFFF1A]">
            <div className="mr-1 ">
              <SearchIcon {...(mode === "dark" && { fill: "#a1a1a1" })} />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-24 outline-none border-none placeholder:text-sm placeholder:font-normal placeholder:text-[#1C1C1C33] dark:placeholder:text-[#FFFFFF33]"
            />
          </div>
        </div>
        <TableComponent />
      </div>
    </div>
  );
};

export default OrderList;
