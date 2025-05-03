
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChartBar, ChartLine, ChartPie, Layout } from "lucide-react";

type ChartTypeSelectorProps = {
  selectedType: string;
  onSelectType: (type: string) => void;
};

const chartTypes = [
  {
    id: "bar",
    name: "Bar Chart",
    description: "Compare data across categories",
    icon: ChartBar,
  },
  {
    id: "line",
    name: "Line Chart",
    description: "Track changes over time",
    icon: ChartLine,
  },
  {
    id: "pie",
    name: "Pie Chart",
    description: "Show proportion of a whole",
    icon: ChartPie,
  },
  {
    id: "stacked",
    name: "Stacked Bar",
    description: "Compare parts of a whole",
    icon: Layout,
  },
];

const ChartTypeSelector = ({ selectedType, onSelectType }: ChartTypeSelectorProps) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Chart Type</h3>
      <RadioGroup
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        value={selectedType}
        onValueChange={onSelectType}
      >
        {chartTypes.map((chart) => (
          <label
            key={chart.id}
            className={`flex items-start space-x-3 border rounded-md p-4 cursor-pointer transition-colors hover:bg-gray-50 ${
              selectedType === chart.id
                ? "border-chart-purple bg-purple-50"
                : "border-gray-200"
            }`}
          >
            <RadioGroupItem value={chart.id} id={chart.id} className="mt-1" />
            <div className="space-y-1">
              <div className="flex items-center">
                <chart.icon className="w-5 h-5 text-chart-purple mr-2" />
                <Label htmlFor={chart.id} className="font-medium">
                  {chart.name}
                </Label>
              </div>
              <p className="text-sm text-gray-500">{chart.description}</p>
            </div>
          </label>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ChartTypeSelector;
