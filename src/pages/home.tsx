import { ShoppingCart } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Pagination from "../components/Pagination";

const featuredProducts = [
  {
    id: 1,
    name: "Camiseta Básica",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Jeans Clásicos",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Zapatillas Deportivas",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Chaqueta de Cuero",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Camisa de Lino",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Pantalón Chino",
    price: 69.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 7,
    name: "Zapatos de Cuero",
    price: 99.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 8,
    name: "Chaqueta Impermeable",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
  },
];

const categories = [
  { id: 1, name: "Ropa", image: "/placeholder.svg?height=200&width=200" },
  { id: 2, name: "Calzado", image: "/placeholder.svg?height=200&width=200" },
  { id: 3, name: "Accesorios", image: "/placeholder.svg?height=200&width=200" },
  { id: 4, name: "Deportes", image: "/placeholder.svg?height=200&width=200" },
];

const Home = () => {
  return (
    <>
      <motion.div
        className="flex flex-col min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Nueva Colección 2024
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Descubre las últimas tendencias en moda
            </p>
            <a
              href="/shop"
              className="inline-flex items-center bg-white text-black px-6 py-2 rounded-lg text-lg hover:bg-gray-100"
            >
              Comprar Ahora
            </a>
          </div>
        </section>

        {/* Featured Products Section with Animation */}
        <motion.section
          className="py-16 px-4 md:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="group cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="relative h-[300px] bg-gray-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${product.price}</span>
                    <button className="bg-transparent border-2 border-black text-black px-4 py-2 rounded-full hover:bg-gray-100 transition duration-300">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Paginación centrada */}
          <div className="flex justify-center mt-8">
            <Pagination />
          </div>
        </motion.section>

        {/* Categories */}
        <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Categorías</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                className="relative h-[200px] group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold">
                  {category.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
