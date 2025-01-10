import { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Input,
  Link,
} from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { Search, ShoppingCart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LogoIcon from "@/icons/logo-icons";

const Navigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Inicio" },
    { href: "/products", label: "Productos" },
    { href: "/categories", label: "Categorías" },
    { href: "/offers", label: "Ofertas" },
    { href: "/contact", label: "Contacto" },
  ];

  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  return (
    <>
      <Navbar isBordered disableAnimation className="bg-white shadow-md">
        {/* Menú móvil */}
        <NavbarContent justify="start" className="sm:hidden">
          <NavbarMenuToggle />
        </NavbarContent>

        {/* Logo */}
        <NavbarContent justify="center">
          <Link href="/" className="font-bold text-lg text-black tracking-wide">
            <LogoIcon />
          </Link>
        </NavbarContent>

        {/* Menú principal */}
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          {menuItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-medium text-black hover:text-gray-700 transition-colors"
            >
              {label}
            </Link>
          ))}
        </NavbarContent>

        {/* Íconos a la derecha */}
        <NavbarContent justify="end" className="gap-4">
          {/* Ícono de búsqueda */}
          <div className="relative">
            <button
              className="p-2 rounded-md hover:bg-gray-200 sm:hidden"
              onClick={toggleSearch}
            >
              <Search size={24} className="text-black" />
            </button>

            {/* Barra de búsqueda en desktop */}
            <div className="hidden sm:flex">
              <Input
                placeholder="Buscar productos..."
                aria-label="Buscar"
                startContent={<Search size={16} className="text-black" />}
                className="rounded-full bg-gray-100 text-black px-4 py-2 shadow-sm focus:ring-2 focus:ring-gray-700 w-full"
              />
            </div>
          </div>

          {/* Menú desplegable de usuario */}
          <Dropdown>
            <DropdownTrigger>
              <button className="p-2 rounded-md hover:bg-gray-200">
                <User size={24} className="text-black" />
              </button>
            </DropdownTrigger>

            <DropdownMenu aria-label="Opciones de usuario">
              <DropdownSection title="Cuenta">
                <DropdownItem key="profile">
                  <Link href="/profile" className="text-black">
                    Perfil
                  </Link>
                </DropdownItem>
                <DropdownItem key="settings">
                  <Link href="/settings" className="text-black">
                    Configuración
                  </Link>
                </DropdownItem>
              </DropdownSection>

              <DropdownSection title="Acciones">
                <DropdownItem key="history">
                  <Link href="/history" className="text-black">
                    Historial de compras
                  </Link>
                </DropdownItem>
                <DropdownItem key="logout" className="text-red-500">
                  Cerrar sesión
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>

          {/* Ícono de carrito */}
          <Link href="/cart">
            <ShoppingCart
              size={24}
              className="text-black hover:text-gray-700"
            />
          </Link>
        </NavbarContent>

        {/* Menú móvil */}
        <NavbarMenu>
          {menuItems.map(({ href, label }) => (
            <NavbarMenuItem key={href}>
              <Link
                href={href}
                className="font-medium text-black hover:text-gray-700 transition-colors"
              >
                {label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* Barra de búsqueda desplegable en móvil */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="sm:hidden bg-white shadow-md border-t p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Input
              placeholder="Buscar productos..."
              aria-label="Buscar"
              startContent={<Search size={16} className="text-black" />}
              className="rounded-full bg-gray-100 text-black px-4 py-2 shadow-sm focus:ring-2 focus:ring-gray-700 w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
