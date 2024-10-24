import BarChartComponent from "../../components/bar-chart/BarChartComponent";
import Card from "../../components/card/Card";
import ArrowRise from "../../icons/ArrowRise";
import ArrowFall from "../../icons/ArrowFall";
import { useSelector } from "react-redux";

const Projections = () => {
  const mode = useSelector((state) => state.toggleTheme.theme);

  const cardData = [
    {
      label: "Customers",
      value: "3,781",
      percentage: "+11.01%",
      icon: ArrowRise,
      bgColor: mode === "dark" ? "bg-[#E3F5FF]" : "bg-[#E3F5FF]",
      iconFill: "#1C1C1C",
      textColor: mode === "dark" ? "text-[#1C1C1C]" : "#1C1C1C",
    },
    {
      label: "Orders",
      value: "1,219",
      percentage: "-0.03%",
      icon: ArrowFall,
      bgColor: mode === "dark" ? "bg-[#FFFFFF0D]" : "bg-[#F7F9FB]",
      iconFill: mode === "dark" ? "#FFFFFF" : "#1C1C1C",
      textColor: mode === "dark" ? "text-[#FFFFFF]" : "text-[#1C1C1C]",
    },
    {
      label: "Revenue",
      value: "$695",
      percentage: "+15.03%",
      icon: ArrowRise,
      bgColor: mode === "dark" ? "bg-[#FFFFFF0D]" : "bg-[#F7F9FB]",
      iconFill: mode === "dark" ? "#FFFFFF" : "#1C1C1C",
      textColor: mode === "dark" ? "text-[#FFFFFF]" : "text-[#1C1C1C]",
    },
    {
      label: "Growth",
      value: "30.1%",
      percentage: "+6.08%",
      icon: ArrowRise,
      bgColor: mode === "dark" ? "bg-[#E5ECF6]" : "bg-[#E5ECF6]",
      iconFill: "#1C1C1C",
      textColor: mode === "dark" ? "text-[#1C1C1C]" : "#1C1C1C",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-7 flex-1">
        {cardData
          .reduce((rows, card, index) => {
            if (index % 2 === 0) rows.push([]);
            rows[rows.length - 1].push(card);
            return rows;
          }, [])
          .map((row, rowIndex) => (
            <div className="flex gap-7" key={rowIndex}>
              {row.map((card, cardIndex) => (
                <Card
                  key={cardIndex}
                  textColor={card.textColor}
                  label={card.label}
                  value={card.value}
                  percentage={card.percentage}
                  icon={card.icon}
                  bgColor={card.bgColor}
                  iconFill={card.iconFill}
                  className="flex-1"
                />
              ))}
            </div>
          ))}
      </div>
      <div className="flex flex-1 flex-col w-full bg-[#F7F9FB] dark:bg-[#FFFFFF0D] rounded-2xl gap-5 py-6">
        <div className="text-sm font-semibold text-[#1C1C1C] dark:text-[#FFFFFF] px-6">
          Projection vs Actuals
        </div>
        <BarChartComponent />
      </div>
    </>
  );
};

export default Projections;
