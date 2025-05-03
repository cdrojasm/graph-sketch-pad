
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { ChartBar, ChartLine, ChartPie, Settings, Table } from "lucide-react";

const navigation = [
  {
    title: "Charts",
    items: [
      { name: "Bar Charts", icon: ChartBar, href: "#" },
      { name: "Line Charts", icon: ChartLine, href: "#" },
      { name: "Pie Charts", icon: ChartPie, href: "#" },
      { name: "Data Tables", icon: Table, href: "#" },
    ],
  },
  {
    title: "Settings",
    items: [
      { name: "Preferences", icon: Settings, href: "#" },
    ],
  },
];

const AppSidebar = () => {
  return (
    <Sidebar defaultCollapsed={false}>
      <SidebarHeader className="h-14 flex items-center px-4">
        <div className="flex items-center space-x-2">
          <ChartBar className="h-6 w-6 text-chart-purple" />
          <span className="font-semibold text-lg">Chart Studio</span>
        </div>
        <SidebarTrigger className="ml-auto" />
      </SidebarHeader>
      <SidebarContent>
        {navigation.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <a href={item.href} className="flex items-center">
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="py-4 px-4 border-t">
        <div className="text-xs text-muted-foreground">
          Chart Studio v1.0.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
