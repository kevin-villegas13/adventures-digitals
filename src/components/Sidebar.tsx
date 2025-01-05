import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart3,
  ImagePlus,
  Inbox,
  Package,
  Settings,
  ShoppingBag,
  Store,
  User,
} from "lucide-react";

const links = [
  {
    to: "/dashboard/profile",
    label: "Mi Perfil",
    icon: <User className="h-4 w-4" />,
  },
  {
    to: "/dashboard/inbox",
    label: "Mensajes",
    icon: <Inbox className="h-4 w-4" />,
  },
  {
    to: "/dashboard/settings",
    label: "Configuración",
    icon: <Settings className="h-4 w-4" />,
  },
];

const buyerLinks = [
  {
    to: "/dashboard/orders",
    label: "Mis Pedidos",
    icon: <Package className="h-4 w-4" />,
  },
  {
    to: "/dashboard/wishlist",
    label: "Lista de Deseos",
    icon: <ShoppingBag className="h-4 w-4" />,
  },
];

const sellerLinks = [
  {
    to: "/dashboard/products",
    label: "Mis Productos",
    icon: <Store className="h-4 w-4" />,
  },
  {
    to: "/dashboard/products/new",
    label: "Crear Producto",
    icon: <ImagePlus className="h-4 w-4" />,
  },
  {
    to: "/dashboard/sales",
    label: "Pedidos Recibidos",
    icon: <Package className="h-4 w-4" />,
  },
  {
    to: "/dashboard/analytics",
    label: "Estadísticas",
    icon: <BarChart3 className="h-4 w-4" />,
  },
];

const Sidebar = ({
  userRole,
  isSidebarOpen,
  toggleSidebar,
}: {
  userRole: string;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const roleLinks = userRole === "buyer" ? buyerLinks : sellerLinks;
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cerrar el sidebar si se hace clic fuera de él en dispositivos móviles
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isSidebarOpen
      ) {
        toggleSidebar(); // Cierra el sidebar
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, toggleSidebar]);

  return (
    <motion.aside
      ref={sidebarRef} // Referencia al sidebar
      className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-800 ${
        isSidebarOpen ? "block" : "hidden"
      } md:block`} // Solo ocultamos en móviles, siempre visible en pantallas grandes
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="border-b p-4 md:border-r md:p-6 md:h-full overflow-y-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Mi Cuenta</h2>
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={link.to}
                className="flex items-center gap-2 p-2 rounded-md text-white hover:bg-gray-700"
              >
                {link.icon}
                {link.label}
              </Link>
            </motion.div>
          ))}
          {roleLinks.map((link) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={link.to}
                className="flex items-center gap-2 p-2 rounded-md text-white hover:bg-gray-700"
              >
                {link.icon}
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
