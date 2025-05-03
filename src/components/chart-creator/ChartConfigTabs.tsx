
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const ChartConfigTabs = () => {
  return (
    <Tabs defaultValue="axes">
      <TabsList className="grid grid-cols-4 mb-4">
        <TabsTrigger value="axes">Axes</TabsTrigger>
        <TabsTrigger value="legend">Legend</TabsTrigger>
        <TabsTrigger value="colors">Colors</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>
      
      <TabsContent value="axes" className="space-y-4">
        <div className="space-y-4">
          <h4 className="font-medium text-sm">X Axis</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="x-title">Title</Label>
              <Input id="x-title" placeholder="X Axis Title" defaultValue="Month" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="x-field">Data Field</Label>
              <Select defaultValue="name">
                <SelectTrigger id="x-field">
                  <SelectValue placeholder="Select field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Month</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="x-gridlines" defaultChecked />
            <Label htmlFor="x-gridlines">Show grid lines</Label>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-medium text-sm">Y Axis</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="y-title">Title</Label>
              <Input id="y-title" placeholder="Y Axis Title" defaultValue="Revenue ($)" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="y-field">Data Field</Label>
              <Select defaultValue="value">
                <SelectTrigger id="y-field">
                  <SelectValue placeholder="Select field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="value">Revenue</SelectItem>
                  <SelectItem value="value2">Cost</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="legend" className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="show-legend">Show Legend</Label>
          <Switch id="show-legend" defaultChecked />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="legend-position">Position</Label>
          <Select defaultValue="bottom">
            <SelectTrigger id="legend-position">
              <SelectValue placeholder="Select position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="top">Top</SelectItem>
              <SelectItem value="right">Right</SelectItem>
              <SelectItem value="bottom">Bottom</SelectItem>
              <SelectItem value="left">Left</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </TabsContent>
      
      <TabsContent value="colors" className="flex items-center justify-center h-32 bg-gray-50 border rounded-md">
        <p className="text-gray-400">Color settings will be available soon</p>
      </TabsContent>
      
      <TabsContent value="advanced" className="flex items-center justify-center h-32 bg-gray-50 border rounded-md">
        <p className="text-gray-400">Advanced settings will be available soon</p>
      </TabsContent>
    </Tabs>
  );
};

export default ChartConfigTabs;
