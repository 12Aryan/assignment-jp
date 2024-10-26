import Projections from "../projections/Projections";
import Revenue from "../revenue/Revenue";
import Sales from "../sales/Sales";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <span className="dark:text-[#FFFFFF] text-[#1C1C1C] text-sm font-semibold mb-5">
        eCommerce
      </span>
      <div className="flex flex-col gap-7">
        <div className="flex gap-7 w-full flex-col 2xl:flex-row">
          <Projections />
        </div>
        <div className="flex gap-7 w-full flex-col 2xl:flex-row ">
          <Revenue />
        </div>
        <div className="flex gap-7 w-full flex-col 2xl:flex-row ">
          <Sales />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
