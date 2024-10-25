import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", line1: 12, line2: 18 },
  { name: "Feb", line1: 15, line2: 15 },
  { name: "Mar", line1: 25, line2: 5 },
  { name: "Apr", line1: 29, line2: 1 },
  { name: "May", line1: 23, line2: 7 },
  { name: "Jun", line1: 10, line2: 20 },
];

const LineChartComponent = () => {
  const mode = useSelector((state) => state.toggleTheme.theme);

  return (
    <ResponsiveContainer width="100%" height={232}>
      <LineChart data={data} margin={{ top: 0, right: 24, left: 0, bottom: 0 }}>
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
          tickMargin={10}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="line1"
          stroke="#A8C5DA"
          strokeWidth={4}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="line2"
          stroke={mode === "dark" ? "#C6C7F8" : "#1C1C1C"}
          strokeWidth={4}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
