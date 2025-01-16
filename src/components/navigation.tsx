import { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  NavbarBrand,
  NavbarItem,
  Input,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  IconLogout,
  IconSettings,
  IconShoppingCart,
} from "@tabler/icons-react";
import { siteConfig } from "@/config/site.config";
import { UserRound, SearchIcon } from "lucide-react";
import { User } from "@/interface/roles";
import { sellerOptions } from "@/config/site-seller.config";
import { buyerOptions } from "@/config/site-buyer.config";

const Navigation = () => {
  const user: User = { rol: "buyer" };
  const roleOptions = user.rol === "seller" ? sellerOptions : buyerOptions;
  const options = [...roleOptions];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn] = useState(true);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-black text-white">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src="../logo/logo.webp" alt="" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {siteConfig.map((item, index) => (
          <NavbarItem key={`${item.href}-${index}`}>
            <Link
              color="foreground"
              href={item.href}
              className="font-medium text-white hover:text-gray-400 transition-colors"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {/* Barra de búsqueda */}
        <div className="relative">
          <Input
            classNames={{
              base: `max-w-full sm:max-w-[10rem] h-10 ${isSearchActive ? "w-full sm:max-w-[20rem]" : "sm:max-w-[10rem]"}`,
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
            onFocus={toggleSearch}
            onBlur={() => setIsSearchActive(false)}
          />
        </div>

        <div className="bg-black text-white"></div>

        {isLoggedIn ? (
          <>
            {/* Contenedor responsivo para móvil y escritorio */}
            <div className="flex items-center justify-between lg:w-auto w-full space-x-6">
              {/* Dropdown de usuario */}
              <Dropdown className="bg-black text-white" placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    size="sm"
                  >
                    <UserRound size={24} className="text-white" />
                  </Avatar>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <>
                    {options.map((option, index) => (
                      <DropdownItem key={index} className="h-10 gap-2">
                        <Link
                          href={option.href}
                          className="text-white flex items-center"
                        >
                          {option.icon}
                          <span className="ml-2">{option.label}</span>
                        </Link>
                      </DropdownItem>
                    ))}
                    <DropdownItem key="configurations" className="h-10 gap-2">
                      <Link
                        href="/dashboard/settings"
                        className="text-white flex items-center"
                      >
                        <IconSettings size={20} />
                        <span className="ml-2"> Configurations</span>
                      </Link>
                    </DropdownItem>
                    <DropdownItem
                      key="logout"
                      className="h-10 gap-2"
                      color="danger"
                    >
                      <Link className="text-white flex items-center">
                        <IconLogout size={20} />
                        <span className="ml-2"> Cerrar Session</span>
                      </Link>
                    </DropdownItem>
                  </>
                </DropdownMenu>
              </Dropdown>

              {/* Carrito de compras solo visible en escritorio */}
              <div className="lg:block hidden">
                <IconShoppingCart size={24} className="text-white" />
              </div>
            </div>

            {/* Carrito de compras visible en móviles */}
            <div className="lg:hidden block">
              <Link href="/cart">
                <IconShoppingCart size={24} className="text-white" />
              </Link>
            </div>
          </>
        ) : (
          <Link className="text-white" href="/login">
            Login
          </Link>
        )}
      </NavbarContent>

      <NavbarMenu className="bg-black text-white">
        {siteConfig.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-white" href={`${item.href}`} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigation;
