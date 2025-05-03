
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ChartMetadataForm = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium mb-4">Chart Metadata</h3>
      
      <div className="space-y-2">
        <Label htmlFor="chart-title">Chart Title</Label>
        <Input id="chart-title" placeholder="Enter chart title" defaultValue="Monthly Revenue Analysis" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="chart-description">Description</Label>
        <Textarea 
          id="chart-description" 
          placeholder="Describe what this chart represents" 
          defaultValue="This chart shows monthly revenue data for the first half of 2025, split by product categories."
          className="min-h-[80px]"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="chart-category">Category</Label>
          <Select defaultValue="finance">
            <SelectTrigger id="chart-category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="operations">Operations</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="chart-visibility">Visibility</Label>
          <Select defaultValue="public">
            <SelectTrigger id="chart-visibility">
              <SelectValue placeholder="Select visibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="team">Team Only</SelectItem>
              <SelectItem value="private">Private</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="chart-tags">Tags</Label>
        <Input id="chart-tags" placeholder="Enter tags separated by commas" defaultValue="revenue, monthly, 2025" />
      </div>
    </div>
  );
};

export default ChartMetadataForm;
