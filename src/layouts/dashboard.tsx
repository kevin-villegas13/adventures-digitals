import Sidebar from "@/components/sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar siempre visible */}
      <Sidebar />

      {/* Área de contenido principal */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
