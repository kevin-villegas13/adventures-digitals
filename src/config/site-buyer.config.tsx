import {
  IconHistory,
  IconShoppingCart,
  IconStar,
  IconCreditCard,
  IconPackage,
  IconHeart,
} from "@tabler/icons-react";

export const buyerOptions = [
  { href: "/orders", label: "Mis Pedidos", icon: <IconHistory size={20} /> },
  {
    href: "/purchases",
    label: "Historial de Compras",
    icon: <IconPackage size={20} />,
  },
  {
    href: "/wishlist",
    label: "Lista de Deseos",
    icon: <IconHeart size={20} />,
  },
  {
    href: "/payment-methods",
    label: "Métodos de Pago",
    icon: <IconCreditCard size={20} />,
  },
  {
    href: "/shipping-addresses",
    label: "Direcciones de Envío",
    icon: <IconShoppingCart size={20} />,
  },
  {
    href: "/reviews",
    label: "Valoraciones y Reseñas",
    icon: <IconStar size={20} />,
  },
];
