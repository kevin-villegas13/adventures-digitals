import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar siempre visible */}
      <Sidebar />

      {/* Área de contenido principal */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
