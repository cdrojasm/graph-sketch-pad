
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
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
          
          <div className="space-y-3">
            <Label>Value Range</Label>
            <div className="flex space-x-4">
              <div className="flex-1">
                <Input placeholder="Min" defaultValue="0" />
              </div>
              <div className="flex-1">
                <Input placeholder="Max" defaultValue="50000" />
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="y-gridlines" defaultChecked />
            <Label htmlFor="y-gridlines">Show grid lines</Label>
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
        
        <div className="space-y-2">
          <Label htmlFor="legend-layout">Layout</Label>
          <Select defaultValue="horizontal">
            <SelectTrigger id="legend-layout">
              <SelectValue placeholder="Select layout" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="horizontal">Horizontal</SelectItem>
              <SelectItem value="vertical">Vertical</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-3">
          <Label>Item Spacing</Label>
          <Slider defaultValue={[10]} max={30} step={1} />
        </div>
      </TabsContent>
      
      <TabsContent value="colors" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="color-scheme">Color Scheme</Label>
          <Select defaultValue="default">
            <SelectTrigger id="color-scheme">
              <SelectValue placeholder="Select color scheme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="pastel">Pastel</SelectItem>
              <SelectItem value="vibrant">Vibrant</SelectItem>
              <SelectItem value="monochrome">Monochrome</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-3">
          <Label>Custom Colors</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="color-series-1" className="text-xs">Series A</Label>
              <div className="flex">
                <Input id="color-series-1" type="color" defaultValue="#9b87f5" className="w-12 h-8 p-0 cursor-pointer" />
                <Input defaultValue="#9b87f5" className="ml-2 flex-1" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="color-series-2" className="text-xs">Series B</Label>
              <div className="flex">
                <Input id="color-series-2" type="color" defaultValue="#33C3F0" className="w-12 h-8 p-0 cursor-pointer" />
                <Input defaultValue="#33C3F0" className="ml-2 flex-1" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="bg-color">Background Color</Label>
          <div className="flex">
            <Input id="bg-color" type="color" defaultValue="#ffffff" className="w-12 h-8 p-0 cursor-pointer" />
            <Input defaultValue="#ffffff" className="ml-2 flex-1" />
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="advanced" className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="enable-animations">Enable Animations</Label>
          <Switch id="enable-animations" defaultChecked />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="animation-duration">Animation Duration (ms)</Label>
          <Input id="animation-duration" type="number" defaultValue="1000" />
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="enable-tooltip">Enable Tooltip</Label>
          <Switch id="enable-tooltip" defaultChecked />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="data-labels">Data Labels</Label>
          <Select defaultValue="auto">
            <SelectTrigger id="data-labels">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto">Auto</SelectItem>
              <SelectItem value="always">Always show</SelectItem>
              <SelectItem value="hover">On hover</SelectItem>
              <SelectItem value="never">Never show</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center justify-between">
          <Label htmlFor="responsive">Responsive</Label>
          <Switch id="responsive" defaultChecked />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ChartConfigTabs;
