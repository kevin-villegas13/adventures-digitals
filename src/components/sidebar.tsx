import { buyerOptions } from "@/config/site-buyer.config";
import { commonOptions } from "@/config/site-options.config";
import { sellerOptions } from "@/config/site-seller.config";
import { User } from "@/interface/roles";
import {
  Link,
  Button,
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@nextui-org/react";
import { IconMenu2 } from "@tabler/icons-react";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user: User = { rol: "seller" };

  // Busco opciones según el rol
  const roleOptions = user.rol === "seller" ? sellerOptions : buyerOptions;
  const options = [...roleOptions, ...commonOptions];

  return (
    <>
      {/* Sidebar para dispositivos grandes */}
      <aside className="hidden lg:block w-64 dark:bg-gray-800 shadow-lg p-4">
        <div className="text-lg font-extrabold text-black mb-8 text-center">
          Mi Cuenta
        </div>

        <nav className="space-y-6">
          {options.map((option) => (
            <div key={option.href}>
              <Link
                href={option.href}
                className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-black"
              >
                {option.icon}
                <span>{option.label}</span>
              </Link>
            </div>
          ))}
        </nav>
      </aside>

      {/* Botón de menú para dispositivos pequeños y medianos */}
      <div className="lg:hidden flex justify-between items-center p-4">
        <Button
          endContent={<IconMenu2 size={24} />}
          onPress={isOpen ? onClose : onOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="absolute top-4 left-4"
        />
      </div>

      {/* Drawer para dispositivos móviles y tabletas */}
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        motionProps={{
          variants: {
            enter: { opacity: 1, x: 0 },
            exit: { x: 100, opacity: 0 },
          },
        }}
        placement="left"
      >
        <DrawerContent>
          <DrawerHeader className="flex justify-center items-center">
            <span className="text-lg font-bold text-black">Mi Cuenta</span>
          </DrawerHeader>

          <DrawerBody>
            <nav className="space-y-6">
              {options.map((option) => (
                <div key={option.href}>
                  <Link
                    href={option.href}
                    className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-black"
                  >
                    {option.icon}
                    <span>{option.label}</span>
                  </Link>
                </div>
              ))}
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
