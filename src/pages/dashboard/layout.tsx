import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { DashboardLayoutProps } from "./interface/dashboard-layout.props";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const DashboardLayout = ({ children, userRole }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <motion.div
      className="flex flex-col min-h-screen md:flex-row"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Botón de toggle solo en móvil cuando el Sidebar está cerrado */}
      {!isSidebarOpen && (
        <button
          className="p-2 absolute top-4 left-4 z-50 rounded-md hover:bg-gray-200 md:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </button>
      )}

      {/* Sidebar */}
      <Sidebar
        userRole={userRole}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Contenido principal */}
      <motion.div
        className="flex-grow p-6 pt-24 md:p-12 md:pt-16 overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default DashboardLayout;
