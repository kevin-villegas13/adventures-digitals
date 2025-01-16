import { IconHistory, IconCreditCard, IconPackage } from "@tabler/icons-react";

export const buyerOptions = [
  { href: "/orders", label: "Mis Pedidos", icon: <IconHistory size={20} /> },
  {
    href: "/purchases",
    label: "Historial de Compras",
    icon: <IconPackage size={20} />,
  },
  {
    href: "/payment-methods",
    label: "Métodos de Pago",
    icon: <IconCreditCard size={20} />,
  },
];
