import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/image";
import { Button, Card } from "@nextui-org/react";
import { Heart, Star } from "lucide-react";

const ProductDetailPage = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Estructura en dos columnas (imagenes a la izquierda y la informacion a la derecha) */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Columna de imágenes del producto */}
          <div className="space-y-4">
            {/* Imagen principal del producto */}
            <div className="relative aspect-square">
              <Image
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                alt="Producto principal"
                className="object-cover rounded-lg"
              />
            </div>

            {/* Vistas adicionales del producto */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="relative aspect-square border hover:border-primary rounded-md overflow-hidden"
                >
                  <Image
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                    alt={`Vista ${i}`}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Columna de información del producto */}
          <div className="space-y-6">
            <Card className="p-6 space-y-6">
              <div className="space-y-2">
                {/* Nombre del producto */}
                <h1 className="text-3xl font-bold">Camiseta Premium Algodón</h1>

                {/* Calificación del producto */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i <= 4 ? "fill-primary" : "fill-muted stroke-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    (128 reseñas)
                  </span>
                </div>

                {/* Precio del producto */}
                <div className="text-2xl font-bold">$49.99</div>
              </div>

              <div className="space-y-4">
                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1" size="lg">
                    Añadir al Carrito
                  </Button>
                  <Button size="lg" color="secondary">
                    <Heart className="w-4 h-4 mr-2" />
                    Añadir a Favoritos
                  </Button>
                </div>

                {/* Descripción del producto */}
                <div className="space-y-4 text-sm">
                  <p>
                    Esta camiseta premium está confeccionada con 100% algodón
                    peinado de alta calidad, proporcionando una suavidad y
                    durabilidad excepcionales. El corte regular ofrece un ajuste
                    cómodo y versátil que favorece a todos los tipos de cuerpo.
                  </p>
                  {/* Lista de características */}
                  <ul className="list-disc list-inside space-y-1">
                    <li>100% Algodón premium</li>
                    <li>Tejido de 180g/m²</li>
                    <li>Cuello redondo reforzado</li>
                    <li>Lavable a máquina</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductDetailPage;
