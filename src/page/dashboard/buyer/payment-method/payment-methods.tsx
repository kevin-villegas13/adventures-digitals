import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

const PaymentMethdPage = () => {
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple
    if (!descripcion.trim()) {
      alert("La descripción es obligatoria.");
      return;
    }

    const nuevoMetodoPago = {
      descripcion,
      estado: parseInt(estado, 10),
    };

    // Simular envío de datos
    console.log("Método de pago creado:", nuevoMetodoPago);
    alert("Método de pago creado exitosamente.");

    // Limpiar el formulario
    setDescripcion("");
    setEstado("1");
  };

  return (
    <div className="mt-8 max-w-4xl mx-auto p-6 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-semibold text-gray-800">
          Crear Método de Pago
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Rellena los campos para registrar un nuevo método de pago.
        </p>
      </div>

      {/* Aquí está el cambio */}
      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-md flex-col gap-6 justify-center items-center rounded-lg bg-white px-6 py-8 shadow-md sm:max-w-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            {/* Descripción */}
            <div>
              <Input
                label="Descripción"
                placeholder="Ingrese la descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
                variant="bordered"
              />
            </div>

            {/* Estado */}
            <div>
              <Select
                label="Estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                aria-label="Seleccionar estado"
                variant="bordered"
              >
                <SelectItem value="1">Activo</SelectItem>
                <SelectItem value="0">Inactivo</SelectItem>
              </Select>
            </div>

            {/* Botón de Crear */}
            <div className="flex justify-center">
              <Button type="submit" color="primary" className="w-full">
                Crear
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethdPage;
