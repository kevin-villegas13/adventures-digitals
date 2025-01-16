import { Link } from "react-router-dom";
import {
  ArrowRight,
  Monitor,
  Gamepad,
  Headphones,
  Rocket,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

// Definimos las categorías de videojuegos y sus respectivos íconos
const categorias = [
  {
    nombre: "Juegos de Acción",
    icono: (
      <Gamepad className="me-2 h-10 w-10 shrink-0 text-gray-900 dark:text-white" />
    ),
  },
  {
    nombre: "Juegos de Estrategia",
    icono: (
      <Monitor className="me-2 h-10 w-10 shrink-0 text-gray-900 dark:text-white" />
    ),
  },
  {
    nombre: "Juegos de Rol",
    icono: (
      <Headphones className="me-2 h-10 w-10 shrink-0 text-gray-900 dark:text-white" />
    ),
  },
  {
    nombre: "Juegos de Lucha",
    icono: (
      <Rocket className="me-2 h-10 w-10 shrink-0 text-gray-900 dark:text-white" />
    ),
  },
  {
    nombre: "Juegos de Deportes",
    icono: (
      <Award className="me-2 h-10 w-10 shrink-0 text-gray-900 dark:text-white" />
    ),
  },
];

const CategorySection = () => {
  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Explora por categoría de juegos
          </h2>
          <Link
            to="#"
            className="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
          >
            Ver más categorías
            <ArrowRight className="ms-1 h-5 w-5" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categorias.map((categoria, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to="#"
                className="flex justify-center items-center rounded-lg border border-gray-200 bg-white px-4 py-6 hover:bg-gray-100 hover:shadow-lg transition-all duration-200 ease-in-out dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:shadow-lg"
              >
                <div className="flex flex-col items-center justify-center">
                  {categoria.icono}
                  <span className="mt-2 text-base font-medium text-gray-900 dark:text-white text-center">
                    {categoria.nombre}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
