import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Pagination,
} from "@nextui-org/react";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import CategorySection from "./categorie-section";

// Datos de los productos
const products = [
  {
    id: 1,
    title: "Producto 1",
    price: "$20.00",
    img: "https://via.placeholder.com/300x200",
    rating: 4,
    description: "Descripción detallada del producto 1.",
  },
  {
    id: 2,
    title: "Producto 2",
    price: "$35.00",
    img: "https://via.placeholder.com/300x200",
    rating: 5,
    description: "Descripción detallada del producto 2.",
  },
  {
    id: 3,
    title: "Producto 3",
    price: "$25.00",
    img: "https://via.placeholder.com/300x200",
    rating: 3,
    description: "Descripción detallada del producto 3.",
  },
  {
    id: 4,
    title: "Producto 4",
    price: "$40.00",
    img: "https://via.placeholder.com/300x200",
    rating: 5,
    description: "Descripción detallada del producto 4.",
  },
  {
    id: 5,
    title: "Producto 5",
    price: "$50.00",
    img: "https://via.placeholder.com/300x200",
    rating: 4,
    description: "Descripción detallada del producto 5.",
  },
  {
    id: 6,
    title: "Producto 6",
    price: "$30.00",
    img: "https://via.placeholder.com/300x200",
    rating: 2,
    description: "Descripción detallada del producto 6.",
  },
  {
    id: 7,
    title: "Producto 7",
    price: "$15.00",
    img: "https://via.placeholder.com/300x200",
    rating: 4,
    description: "Descripción detallada del producto 7.",
  },
  {
    id: 8,
    title: "Producto 8",
    price: "$60.00",
    img: "https://via.placeholder.com/300x200",
    rating: 5,
    description: "Descripción detallada del producto 8.",
  },
  {
    id: 9,
    title: "Producto 9",
    price: "$45.00",
    img: "https://via.placeholder.com/300x200",
    rating: 3,
    description: "Descripción detallada del producto 9.",
  },
  {
    id: 10,
    title: "Producto 10",
    price: "$55.00",
    img: "https://via.placeholder.com/300x200",
    rating: 4,
    description: "Descripción detallada del producto 10.",
  },
];

// Función para renderizar las estrellas según el rating
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        size={18}
        className={i <= rating ? "text-yellow-500" : "text-gray-300"}
      />
    );
  }
  return stars;
};

const ProductCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calcular los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Manejar el cambio de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col bg-gray-50 dark:bg-gray-900 min-h-screen">
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        {/* Título */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
          Nuestros Productos
        </h1>

        {/* Grid de productos */}
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentProducts.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex justify-center"
            >
              <Card
                isPressable
                shadow="lg"
                className="border border-gray-200 rounded-lg w-full"
                onPress={() =>
                  console.log(`Producto presionado: ${item.title}`)
                }
              >
                <CardBody className="p-0">
                  <Image
                    alt={item.title}
                    src={item.img}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </CardBody>
                <CardFooter className="flex flex-col p-4 bg-white dark:bg-gray-800">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <div className="flex">{renderStars(item.rating)}</div>
                    <p className="text-xl font-bold text-gray-900 dark:text-gray-200">
                      {item.price}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 mt-4">
                    <Button
                      size="lg"
                      onPress={() => console.log(`Comprado: ${item.title}`)}
                      className="w-full sm:w-auto"
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      Comprar
                    </Button>
                    <Link to={`/product/${item.id}`}>
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600"
                      >
                        Ver Detalles
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Paginación */}
        <div className="flex justify-center mt-8">
          <Pagination
            showControls
            initialPage={1}
            total={Math.ceil(products.length / itemsPerPage)}
            onChange={handlePageChange}
          />
        </div>

        {/* Categorías */}
        <CategorySection />
      </main>
    </div>
  );
};

export default ProductCards;
