
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const sampleData = [
  { id: 1, month: "January", product: "Product A", revenue: 42000, cost: 18000, profit: 24000 },
  { id: 2, month: "January", product: "Product B", revenue: 38000, cost: 16500, profit: 21500 },
  { id: 3, month: "February", product: "Product A", revenue: 39500, cost: 17200, profit: 22300 },
  { id: 4, month: "February", product: "Product B", revenue: 42800, cost: 18600, profit: 24200 },
  { id: 5, month: "March", product: "Product A", revenue: 45200, cost: 19600, profit: 25600 },
  { id: 6, month: "March", product: "Product B", revenue: 37800, cost: 16400, profit: 21400 },
];

const DataPreviewTable = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input className="pl-9" placeholder="Search data..." />
        </div>
        
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" /> Filter
        </Button>
      </div>
      
      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="font-medium">Month</TableHead>
              <TableHead className="font-medium">Product</TableHead>
              <TableHead className="font-medium text-right">Revenue ($)</TableHead>
              <TableHead className="font-medium text-right">Cost ($)</TableHead>
              <TableHead className="font-medium text-right">Profit ($)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sampleData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.month}</TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell className="text-right">{row.revenue.toLocaleString()}</TableCell>
                <TableCell className="text-right">{row.cost.toLocaleString()}</TableCell>
                <TableCell className="text-right font-medium">
                  {row.profit.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="text-sm text-gray-500">
        Showing 6 of 24 rows. <a href="#" className="text-chart-purple hover:underline">Show more</a>
      </div>
    </div>
  );
};

export default DataPreviewTable;
