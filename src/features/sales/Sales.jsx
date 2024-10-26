import { useSelector } from "react-redux";
import PieChartComponent from "../../components/pie-chart/PieChartComponent";
import SimpleTable from "../../components/table/SimpleTable";
import { headersSimple, tableData } from "../../data/Data";
import DotIcon from "../../icons/DotIcon";

const Sales = () => {
  const mode = useSelector((state) => state.toggleTheme.theme);

  return (
    <>
      <div className="bg-[#F7F9FB] dark:bg-[#FFFFFF0D] py-6 rounded-2xl flex flex-col w-full gap-4   ">
        <div className="flex items-center gap-4 px-6 text-sm font-semibold text-[#1C1C1C] dark:text-[#FFFFFF]">
          Top Selling Products
        </div>
        <SimpleTable tableData={tableData} headers={headersSimple} />
      </div>

      <div className="flex flex-col gap-4 bg-[#F7F9FB] dark:bg-[#FFFFFF0D] xs:items-center p-6 rounded-2xl 2xl:max-w-[272px] 2xl:min-w-[202px] 2xl:w-[272px] h-[318px] w-full">
        <div className="text-sm font-semibold text-[#1C1C1C] dark:text-[#FFFFFF]">
          TotalSales
        </div>
        <PieChartComponent />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between">
            <span className="flex  items-center gap-0.5 text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal">
              <DotIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />
              Direct
            </span>
            <span className="text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal w-[60px] text-left ">
              $300.56
            </span>
          </div>
          <div className="flex justify-between">
            <span className="flex  items-center gap-0.5 text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal">
              <DotIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />
              Affiliate
            </span>
            <span className="text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal w-[60px] text-left ">
              $135.18
            </span>
          </div>
          <div className="flex justify-between">
            <span className="flex  items-center gap-0.5 text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal">
              <DotIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />
              Sponsored
            </span>
            <span className="text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal w-[60px] text-left ">
              $154.02
            </span>
          </div>
          <div className="flex justify-between">
            <span className="flex  items-center gap-0.5 text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal">
              <DotIcon {...(mode === "dark" && { fill: "#FFFFFF" })} />
              E-mail
            </span>
            <span className="text-[#1C1C1C] dark:text-[#FFFFFF] text-sm font-normal w-[60px] text-left ">
              $48.96
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
