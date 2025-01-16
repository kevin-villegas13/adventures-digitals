import { IconHistory, IconCreditCard, IconPackage } from "@tabler/icons-react";

export const buyerOptions = [
  {
    href: "/dashboard/orders",
    label: "Mis Pedidos",
    icon: <IconHistory size={20} />,
  },
  {
    href: "/dashboard/purchases",
    label: "Historial de Compras",
    icon: <IconPackage size={20} />,
  },
  {
    href: "/dashboard/payment-methods",
    label: "Métodos de Pago",
    icon: <IconCreditCard size={20} />,
  },
];
