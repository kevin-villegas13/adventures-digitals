import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Pagination,
} from "@nextui-org/react";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import CategorySection from "./categorie-section";

// Datos de los productos
const products = [
  {
    id: 1,
    title: "Producto 1",
    price: "$18.00",
    img: "https://picsum.photos/id/1/200/300",
    rating: 5,
    description: "Una nueva descripción para el Producto 1.",
  },
  {
    id: 2,
    title: "Producto 2",
    price: "$40.00",
    img: "https://picsum.photos/id/2/200/300",
    rating: 4,
    description: "Una nueva descripción para el Producto 2.",
  },
  {
    id: 3,
    title: "Producto 3",
    price: "$25.00",
    img: "https://picsum.photos/id/3/200/300",
    rating: 3,
    description: "Una nueva descripción para el Producto 3.",
  },
  {
    id: 4,
    title: "Producto 4",
    price: "$50.00",
    img: "https://picsum.photos/id/4/200/300",
    rating: 5,
    description: "Una nueva descripción para el Producto 4.",
  },
  {
    id: 5,
    title: "Producto 5",
    price: "$55.00",
    img: "https://picsum.photos/id/5/200/300",
    rating: 4,
    description: "Una nueva descripción para el Producto 5.",
  },
  {
    id: 6,
    title: "Producto 6",
    price: "$28.00",
    img: "https://picsum.photos/id/6/200/300",
    rating: 2,
    description: "Una nueva descripción para el Producto 6.",
  },
  {
    id: 7,
    title: "Producto 7",
    price: "$38.00",
    img: "https://picsum.photos/id/7/200/300",
    rating: 4,
    description: "Una nueva descripción para el Producto 7.",
  },
  {
    id: 8,
    title: "Producto 8",
    price: "$62.00",
    img: "https://picsum.photos/id/8/200/300",
    rating: 5,
    description: "Una nueva descripción para el Producto 8.",
  },
  {
    id: 9,
    title: "Producto 9",
    price: "$46.00",
    img: "https://picsum.photos/id/9/200/300",
    rating: 3,
    description: "Una nueva descripción para el Producto 9.",
  },
  {
    id: 10,
    title: "Producto 10",
    price: "$59.00",
    img: "https://picsum.photos/id/10/200/300",
    rating: 4,
    description: "Una nueva descripción para el Producto 10.",
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
              >
                <CardBody className="p-0">
                  <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                    <img
                      alt={item.title}
                      src={item.img}
                      className="object-cover w-full h-full rounded-t-lg"
                      loading="lazy"
                    />
                  </div>
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
                    {/* Botón de compra */}
                    <Button
                      size="lg"
                      onPress={() => console.log(`Comprado: ${item.title}`)}
                      className="w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={18} className="mr-2" />
                      Comprar
                    </Button>

                    {/* Enlace separado */}
                    <Button
                      size="lg"
                      as="a"
                      href={`/product/${item.id}`}
                      className="w-full sm:w-auto text-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      Ver Detalles
                    </Button>
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
