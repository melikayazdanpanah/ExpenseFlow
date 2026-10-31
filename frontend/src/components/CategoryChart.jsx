import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { categoryExpenses } from "../data/mockData";

const COLORS = [
  "#8b5cf6",
  "#06b6d4",
  "#f97316",
  "#ec4899",
  "#22c55e",
];

function CategoryChart() {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-white">
          Expenses by Category
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          See where your money goes
        </p>
      </div>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryExpenses}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="45%"
              innerRadius={65}
              outerRadius={100}
              paddingAngle={4}
            >
              {categoryExpenses.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              formatter={(value) => `$${value}`}
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Legend
              verticalAlign="bottom"
              iconType="circle"
              wrapperStyle={{ color: "#94a3b8", fontSize: "12px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CategoryChart;