import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarCharts = ({ ratings }) => {
  return (
    <div className="w-full h-96 bg-slate-100 p-10 rounded-2xl shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={700} height={300} data={ratings} layout="vertical">
          <CartesianGrid stroke="#E2E8F0" />
          <XAxis type="number" stroke="#334155" />
          <YAxis dataKey="name" type="category" stroke="#334155" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#F8FAFC",
              border: "1px solid #CBD5E1",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Bar
            dataKey="count"
            fill="#3B82F6"
            activeBar={{ fill: "#2563EB" }}
            radius={[4, 4, 4, 4]}
          >
            {ratings.map((entry, index) => (
              <rect
                key={`bar-${index}`}
                className="transition-all duration-300 hover:fill-blue-600 hover:scale-105 cursor-pointer"
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
