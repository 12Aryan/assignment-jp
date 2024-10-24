import Card from "../../components/card/Card";
import ArrowRise from "../../icons/ArrowRise";
import ArrowFall from "../../icons/ArrowFall";
import { useSelector } from "react-redux";
import StackedBarChart from "../../components/bar-chart/BarChartComponent";
import BarChartComponent from "../../components/bar-chart/BarChartComponent";

const Dashboard = () => {
  const mode = useSelector((state) => state.toggleTheme.theme);

  return (
    <div className="flex flex-col">
      <span className="dark:text-[#FFFFFF] text-[#1C1C1C] text-sm font-semibold mb-5">
        eCommerce
      </span>
      <div className="flex gap-7 w-full 2xl:flex-row flex-col ">
        <div className="flex flex-col gap-7">
          <div className="flex gap-7">
            <Card
              textColor={mode === "dark" ? "text-[#1C1C1C]" : "#1C1C1C"}
              label="Customers"
              value="3,781"
              percentage="+11.01%"
              icon={ArrowRise}
              bgColor={mode === "dark" ? "bg-[#E3F5FF]" : "bg-[#E3F5FF]"}
              iconFill={"#1C1C1C"}
            />
            <Card
              textColor={mode === "dark" ? "text-[#FFFFFF]" : "text-[#1C1C1C]"}
              label="Orders"
              value="1,219"
              percentage="-0.03%"
              icon={ArrowFall}
              bgColor={mode === "dark" ? "bg-[#FFFFFF0D]" : "bg-[#F7F9FB]"}
              iconFill={mode === "dark" ? "#FFFFFF" : "#1C1C1C"}
            />
          </div>
          <div className="flex gap-7">
            <Card
              textColor={mode === "dark" ? "text-[#FFFFFF]" : "text-[#1C1C1C]"}
              label="Revenue"
              value="$695"
              percentage="+15.03%"
              icon={ArrowRise}
              bgColor={mode === "dark" ? "bg-[#FFFFFF0D]" : "bg-[#F7F9FB]"}
              iconFill={mode === "dark" ? "#FFFFFF" : "#1C1C1C"}
            />
            <Card
              textColor={mode === "dark" ? "text-[#1C1C1C]" : "#1C1C1C"}
              label="Growth"
              value="30.1%"
              percentage="+6.08%"
              icon={ArrowRise}
              bgColor={mode === "dark" ? "bg-[#E5ECF6]" : "bg-[#E5ECF6]"}
              iconFill={"#1C1C1C"}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col w-100% bg-[#F7F9FB] dark:bg-[#FFFFFF0D] rounded-2xl gap-5 py-6 ">
          <div className="text-sm font-semibold text-[#1C1C1C] dark:text-[#FFFFFF] px-6 ">
            Projection vs Actuals
          </div>
          <BarChartComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
