import { useState } from "react";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const menuLinks = [
    { href: "/", label: "Inicio" },
    { href: "/products", label: "Productos" },
    { href: "/categories", label: "Categorías" },
    { href: "/offers", label: "Ofertas" },
    { href: "/contact", label: "Contacto" },
  ];

  const userMenuLinks = [
    { href: "/register", label: "Crear Cuenta" },
    { href: "/login", label: "Ingresar" },
    { href: "#", label: "Perfil" },
    { href: "#", label: "Mis Pedidos" },
    { href: "#", label: "Configuración" },
    { href: "#", label: "Cerrar Sesión" },
  ];

  const animationProps = {
    animate: {
      x: isMenuOpen ? [0, 20, -20, 0] : 0,
      opacity: isMenuOpen ? [1, 0.7, 0.7, 1] : 1,
      y: isMenuOpen ? [0, 10, -10, 0] : 0,
    },
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 30,
      delay: 0.1,
    },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        {/* Botón para menú móvil */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-md hover:bg-gray-200"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Logo */}
        <NavLink to="/" className="ml-4 md:ml-0">
          <h1 className="text-xl font-bold text-gray-900">LOGO</h1>
        </NavLink>

        {/* Enlaces principales del menú */}
        <nav className="hidden md:flex md:items-center md:gap-6 flex-grow justify-center">
          {menuLinks.map((link, index) => (
            <NavLink
              key={`${link.href}-${index}`}
              to={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Acciones de la derecha (Buscar, Usuario, Carrito) */}
        <div className="ml-auto flex items-center gap-4">
          <motion.div
            className="flex items-center gap-4"
            animate={animationProps.animate}
            transition={animationProps.transition}
          >
            {/* Barra de búsqueda en desktop */}
            <div className="hidden lg:flex items-center relative">
              <form className="w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="search"
                  placeholder="Buscar productos..."
                  className="w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </form>
            </div>

            {/* Botón de búsqueda para móviles */}
            <button
              className="p-2 rounded-md hover:bg-gray-200 lg:hidden"
              onClick={toggleSearch}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Buscar</span>
            </button>

            {/* Menú desplegable de usuario */}
            <div className="relative z-20">
              <button
                className="p-2 rounded-md hover:bg-gray-200"
                onClick={toggleUserMenu}
              >
                <User className="h-5 w-5" />
                <span className="sr-only">Abrir menú de usuario</span>
              </button>

              <motion.div
                className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2"
                animate={{
                  opacity: isUserMenuOpen ? 1 : 0,
                  scale: isUserMenuOpen ? 1 : 0.95,
                }}
                transition={{
                  opacity: { type: "spring", stiffness: 300, damping: 20 },
                  scale: { type: "spring", stiffness: 300, damping: 20 },
                  delay: 0.2,
                }}
              >
                {userMenuLinks.map((link, index) => (
                  <NavLink
                    key={`${link.href}-${index}`}
                    to={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </motion.div>
            </div>

            {/* Botón del carrito */}
            <button className="p-2 rounded-md hover:bg-gray-200">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Menú de navegación móvil */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -20,
        }}
        transition={{
          opacity: { type: "spring", stiffness: 300, damping: 20 },
          y: { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        <nav className="flex flex-col gap-4 p-4">
          {menuLinks.map((link, index) => (
            <NavLink
              key={`${link.href}-${index}`}
              to={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </motion.div>

      {/* Formulario de búsqueda en móvil */}
      <motion.div
        className={`md:hidden flex items-center p-4 bg-white shadow-md ${
          isSearchOpen ? "block" : "hidden"
        }`}
        animate={{
          opacity: isSearchOpen ? 1 : 0,
          y: isSearchOpen ? 0 : -20,
        }}
        transition={{
          opacity: { type: "spring", stiffness: 300, damping: 20 },
          y: { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        <form className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="search"
            placeholder="Buscar productos..."
            className="w-full rounded-md border border-gray-300 pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      </motion.div>
    </header>
  );
};

export default Navbar;
