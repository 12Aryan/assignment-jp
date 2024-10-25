import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Direct", value: 300.56 },
  { name: "Affiliate", value: 135.18 },
  { name: "Sponsored", value: 154.02 },
  { name: "E-mail", value: 48.96 },
];

const COLORS = ["#C6C7F8", "#BAEDBD", "#95A4FC", "#B1E3FF"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0];
    return (
      <div
        style={{
          backgroundColor: "#1C1C1CCC",
          borderRadius: "8px",
          padding: "4px 8px",
        }}
      >
        <p
          className="text-[#FFFFFF] text-xs font-normal "
          style={{ margin: 0 }}
        >{` ${((value / 638.74) * 100).toFixed(2)}%`}</p>
      </div>
    );
  }

  return null;
};

const PieChartComponent = () => {
  return (
    <ResponsiveContainer width={120} height={120}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={40}
          outerRadius={60}
          label={({ percent, name }) =>
            `${name}: ${(percent * 100).toFixed(2)}%`
          }
          cornerRadius={3}
          paddingAngle={5}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
