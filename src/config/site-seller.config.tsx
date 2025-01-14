import {
  IconGift,
  IconHistory,
  IconPlus,
  IconShoppingCart,
  IconStar,
  IconBox,
  IconTrendingUp,
} from "@tabler/icons-react";

export const sellerOptions = [
  {
    href: "/products",
    label: "Mis Productos",
    icon: <IconBox size={20} />,
  },
  {
    href: "/add-product",
    label: "Añadir Producto",
    icon: <IconPlus size={20} />,
  },
  {
    href: "/orders",
    label: "Pedidos Recibidos",
    icon: <IconHistory size={20} />,
  },
  {
    href: "/sales",
    label: "Ventas Realizadas",
    icon: <IconTrendingUp size={20} />,
  },
  {
    href: "/stock",
    label: "Gestión de Stock",
    icon: <IconShoppingCart size={20} />,
  },
  {
    href: "/offers",
    label: "Ofertas y Promociones",
    icon: <IconGift size={20} />,
  },
  {
    href: "/reviews",
    label: "Ver Comentarios y Reseñas",
    icon: <IconStar size={20} />,
  },
];
