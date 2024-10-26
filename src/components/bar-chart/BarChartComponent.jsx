import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 17, bg: 4 },
  { name: "Feb", value: 21, bg: 3 },
  { name: "Mar", value: 18, bg: 5 },
  { name: "Apr", value: 23, bg: 5 },
  { name: "May", value: 15, bg: 4 },
  { name: "Jun", value: 21, bg: 5 },
];

const BarChartComponent = () => {
  const mode = useSelector((state) => state.toggleTheme.theme);

  return (
    <ResponsiveContainer width="100%" height={168} className="max-w-full">
      <BarChart
        data={data}
        margin={{ top: 0, right: 24, left: 0, bottom: 0 }}
      >
        <CartesianGrid
          horizontal={true}
          vertical={false}
          stroke={mode === "dark" ? "#FFFFFF66" : "#1C1C1C1A"}
          strokeWidth={1}
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 400,
            fill: mode === "dark" ? "#FFFFFF66" : "#1C1C1C66",
          }}
        />
        <YAxis
          tickFormatter={(value) => `${value}M`}
          ticks={[0, 10, 20, 30]}
          axisLine={false}
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 400,
            fill: mode === "dark" ? "#FFFFFF66" : "#1C1C1C66",
          }}
          domain={[0, 30]}
        />
        <Tooltip />
        <Bar dataKey="value" stackId="a" fill="#A8C5DA" barSize={20} />
        <Bar
          dataKey="bg"
          stackId="a"
          fill="#cfdfeb"
          barSize={20}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
