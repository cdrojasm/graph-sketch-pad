
import { Card } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Jan", value: 400, value2: 240 },
  { name: "Feb", value: 300, value2: 139 },
  { name: "Mar", value: 200, value2: 980 },
  { name: "Apr", value: 278, value2: 390 },
  { name: "May", value: 189, value2: 480 },
  { name: "Jun", value: 239, value2: 380 },
];

const ChartPreview = ({ chartType }: { chartType: string }) => {
  return (
    <div className="h-[400px] border rounded-md p-4 bg-white">
      <ResponsiveContainer width="100%" height="100%">
        {chartType === "bar" ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#9b87f5" name="Series A" />
            <Bar dataKey="value2" fill="#33C3F0" name="Series B" />
          </BarChart>
        ) : chartType === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#9b87f5" name="Series A" />
            <Line type="monotone" dataKey="value2" stroke="#33C3F0" name="Series B" />
          </LineChart>
        ) : chartType === "pie" ? (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={[
                    "#9b87f5", 
                    "#33C3F0", 
                    "#4CAF50", 
                    "#F97316", 
                    "#FFC107", 
                    "#D946EF"
                  ][index % 6]} 
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        ) : (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="value"
              stackId="1"
              stroke="#9b87f5"
              fill="#9b87f5"
              name="Series A"
            />
            <Area
              type="monotone"
              dataKey="value2"
              stackId="1"
              stroke="#33C3F0"
              fill="#33C3F0"
              name="Series B"
            />
          </AreaChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default ChartPreview;
