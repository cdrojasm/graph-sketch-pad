
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import ChartCreator from "@/components/ChartCreator";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto">
          <ChartCreator />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
