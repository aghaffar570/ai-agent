import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardNavbar from '@/modules/dashboard/ui/components/dashboard-navbar';
import DashboardSidebar from '@/modules/dashboard/ui/components/dashboard-sidebar';

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className='w-full'>
        <DashboardNavbar />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default layout;
