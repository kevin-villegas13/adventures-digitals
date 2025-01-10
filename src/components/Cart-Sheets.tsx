import { useEffect, useState } from "react";
import { X, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { CartItem, CartSheetsProps } from "@/interface/cart-items";

const CartSheets: React.FC<
  CartSheetsProps & {
    setTotalItems: React.Dispatch<React.SetStateAction<number>>;
  }
> = ({ isOpen, setIsOpen, setTotalItems }) => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Juego A",
      price: 29.99,
      quantity: 1,
      image: "/path/to/image.jpg",
    },
    {
      id: 2,
      name: "Juego B",
      price: 19.99,
      quantity: 2,
      image: "/path/to/image.jpg",
    },
  ]);

  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const removeItem = (id: number) => {
    // Animación de eliminación: se agrega un pequeño retraso antes de eliminar el item
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  useEffect(() => {
    setTotalItems(totalItems);
  }, [totalItems, setTotalItems]);

  return (
    <>
      <div className="relative">
        {/* Carrito con animación de deslizamiento suave */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 25,
          }}
          className="fixed inset-0 flex items-center justify-end z-50"
        >
          <div className="bg-white w-full sm:max-w-lg h-full rounded-l-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 bg-gray-100">
              <h2 className="text-xl font-medium">
                Carrito de Compras ({totalItems})
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Cerrar</span>
              </button>
            </div>

            <div className="p-4 max-h-96 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex gap-4 border-b pb-4"
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                        delay: 0.2, // Retraso para que la animación termine antes de la eliminación
                      }}
                    >
                      <div className="relative h-24 w-24 overflow-hidden rounded">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-500">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-600 hover:text-red-600"
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Eliminar producto</span>
                          </button>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                            className="h-8 w-8 p-1 border rounded-full hover:bg-gray-200"
                          >
                            <Minus className="h-4 w-4" />
                            <span className="sr-only">Reducir cantidad</span>
                          </button>
                          <motion.span
                            key={item.quantity}
                            className="w-12 text-center"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 150,
                              damping: 25,
                            }}
                          >
                            {item.quantity}
                          </motion.span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="h-8 w-8 p-1 border rounded-full hover:bg-gray-200"
                          >
                            <Plus className="h-4 w-4" />
                            <span className="sr-only">Aumentar cantidad</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t pt-4 p-4">
                <div className="flex justify-between py-4">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded-lg">
                  Proceder al pago
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CartSheets;
