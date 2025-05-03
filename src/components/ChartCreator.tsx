
import { useState } from "react";
import ChartTypeSelector from "./chart-creator/ChartTypeSelector";
import ChartPreview from "./chart-creator/ChartPreview";
import ChartConfigTabs from "./chart-creator/ChartConfigTabs";
import ChartMetadataForm from "./chart-creator/ChartMetadataForm";
import DataPreviewTable from "./chart-creator/DataPreviewTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Save } from "lucide-react";

const ChartCreator = () => {
  const [selectedChartType, setSelectedChartType] = useState("bar");

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Create New Chart</h1>
        <Button className="bg-chart-purple hover:bg-chart-deep-purple">
          <Save className="mr-2 h-4 w-4" /> Save Chart
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <ChartMetadataForm />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <ChartTypeSelector
                selectedType={selectedChartType}
                onSelectType={setSelectedChartType}
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Chart Configuration</h3>
              <ChartConfigTabs />
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Chart Preview</h3>
              <ChartPreview chartType={selectedChartType} />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Data Preview</h3>
              <DataPreviewTable />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChartCreator;
