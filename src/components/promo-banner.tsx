import { Card, CardBody } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

const PromoBanner = () => {
  const promoText = {
    title: "Descubre el futuro de los videojuegos",
    paragraph1:
      "Bienvenido a nuestra tienda online de videojuegos, donde la diversión se encuentra con la innovación. Ofrecemos una amplia variedad de juegos, desde títulos de acción hasta aventuras, todo a precios competitivos. Disfruta de una experiencia de compra sin interrupciones, con entrega rápida y ofertas exclusivas.",
    paragraph2:
      "Ya sea que busques los últimos lanzamientos o juegos clásicos, tenemos todo lo que necesitas. Compra hoy y vive una nueva forma de jugar online.",
  };

  const promoImages = [
    {
      src: "../image/halo.webp",
      alt: "office content 1",
    },
    {
      src: "../image/lol.webp",
      alt: "office content 2",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6 lg:space-y-8 text-center lg:text-left">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {promoText.title}
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {promoText.paragraph1}
          </motion.p>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {promoText.paragraph2}
          </motion.p>
        </div>

        {/* Right Section: Product Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {promoImages.map((image, index) => (
            <PromoImage key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PromoImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      whileHover={{
        scale: 1.05,
        opacity: 0.9,
        transition: { duration: 0.3 },
      }}
    >
      <Card isFooterBlurred className="border-none" radius="lg">
        <CardBody className="p-0">
          <Image alt={alt} src={src} className="object-cover" />
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default PromoBanner;
