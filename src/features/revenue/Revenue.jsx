import { useSelector } from "react-redux";
import DotIcon from "../../icons/DotIcon";
import LightBar from "../../icons/LightBar";
import LineChartComponent from "../../components/line-chart/LineChartComponent";
import WorldMap from "../../icons/WorldMap";
import ProgressIcon from "../../icons/ProgressIcon";

const Revenue = () => {
  const mode = useSelector((state) => state.toggleTheme.theme);

  const locations = [
    { name: "New York", revenue: "72K" },
    { name: "San Francisco", revenue: "39K" },
    { name: "Sydney", revenue: "25K" },
    { name: "Singapore", revenue: "61K" },
  ];

  const renderLocation = ({ name, revenue }) => (
    <div key={name}>
      <div className="flex justify-between text-sm font-normal dark:text-[#FFFFFF] text-[#1C1C1C]">
        <span>{name}</span>
        <span>{revenue}</span>
      </div>
      <ProgressIcon />
    </div>
  );

  return (
    <div className="flex gap-7 flex-col xl:flex-row w-full">
      <div className="flex flex-1 flex-col w-full bg-[#F7F9FB] dark:bg-[#FFFFFF0D] rounded-2xl gap-5 py-6">
        <div className="flex items-center gap-4 px-6 text-sm font-semibold text-[#1C1C1C] dark:text-[#FFFFFF]">
          Revenue
          <LightBar />
          <div className="flex items-center">
            <DotIcon fill={mode === "dark" ? "#C6C7F8" : "black"} />
            <span className="text-xs font-normal mx-1">Current Week</span>
            <span className="text-xs font-semibold">$58,211</span>
          </div>
          <div className="flex items-center">
            <DotIcon fill="#A8C5DA" />
            <span className="text-xs font-normal mx-1">Previous Week</span>
            <span className="text-xs font-semibold">$68,768</span>
          </div>
        </div>
        <div className="flex-grow">
          <LineChartComponent />
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-[#F7F9FB] dark:bg-[#FFFFFF0D] xs:items-center xs:justify-center xl:p-6 rounded-2xl xl:max-w-[272px] xl:min-w-[202px] xl:w-[272px] h-[318px] w-full">
        <div className="text-sm font-semibold text-[#1C1C1C] dark:text-[#FFFFFF]">
          Revenue by Location
        </div>
        <WorldMap />
        <div className="flex flex-col gap-4">
          {locations.map(renderLocation)}
        </div>
      </div>
    </div>
  );
};

export default Revenue;
