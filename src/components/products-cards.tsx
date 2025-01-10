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
        {/* Título de la sección */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white leading-tight text-center mb-8">
          Nuestros Productos
        </h1>

        {/* Cards de productos */}
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentProducts.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Card
                isPressable
                shadow="lg"
                onPress={() =>
                  console.log(`Producto presionado: ${item.title}`)
                }
                className="border border-gray-200 rounded-lg"
              >
                {/* Imagen del producto */}
                <CardBody className="p-0">
                  <Image
                    alt={item.title}
                    className="w-full object-cover h-[250px] sm:h-[200px] lg:h-[250px] rounded-t-lg"
                    src={item.img}
                    width="100%"
                  />
                </CardBody>

                {/* Detalles del producto */}
                <CardFooter className="flex flex-col justify-between p-4 bg-white dark:bg-gray-800">
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {renderStars(item.rating)} {/* Renderiza las estrellas */}
                    </div>
                    <p className="text-xl font-bold text-gray-900 dark:text-gray-200">
                      {item.price}
                    </p>
                  </div>

                  {/* Botones para Comprar y Ver Detalles */}
                  <div className="flex flex-col sm:flex-row sm:space-x-4 w-full justify-center">
                    <Button
                      size="lg"
                      onPress={() =>
                        console.log(`Producto comprado: ${item.title}`)
                      }
                      className="w-full sm:w-auto mb-2 sm:mb-0"
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      Comprar
                    </Button>

                    {/* Enlace a los detalles del producto */}
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
        <div className="flex justify-center mt-6">
          <Pagination
            showControls
            initialPage={1}
            total={Math.ceil(products.length / itemsPerPage)}
            onChange={handlePageChange}
          />
        </div>

        <CategorySection />
      </main>
    </div>
  );
};

export default ProductCards;
