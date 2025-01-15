import { User } from "@/interface/roles";
import {
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { ChangeEvent, useState } from "react";

const SettingPage = () => {
  const [userRole, setUserRole] = useState<User["rol"]>("buyer");

  const handleRoleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setUserRole(event.target.value as User["rol"]);
  };

  return (
    <>
      {/* Contenedor principal responsivo */}
      <div className="max-w-4xl mx-auto p-6">
        {/* Título y descripción */}
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-semibold text-gray-800">
            Configuración
          </h1>
          <p className="text-lg text-gray-600">
            Administra tus preferencias y configuración de cuenta.
          </p>
        </div>

        {/* Sección de tipo de cuenta */}
        <Card className="shadow-lg rounded-lg border border-gray-200">
          <CardHeader className="bg-gray-100 p-4">
            <h2 className="text-xl font-medium text-gray-800">
              Tipo de Cuenta
            </h2>
          </CardHeader>
          <CardBody className="p-4">
            {/* Selección de rol */}
            <div className="space-y-4">
              <Select
                label="Selecciona tu rol"
                size="md"
                value={userRole}
                onChange={handleRoleChange}
                isInvalid={!userRole}
                errorMessage={!userRole ? "Debes seleccionar un rol" : ""}
                className="w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                scrollShadowProps={{
                  isEnabled: false,
                }}
              >
                <SelectItem value="buyer">Comprador</SelectItem>
                <SelectItem value="seller">Vendedor</SelectItem>
              </Select>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default SettingPage;
