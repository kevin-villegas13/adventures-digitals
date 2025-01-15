import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import {
  IconUser,
  IconMail,
  IconLock,
  IconEdit,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";
import { useState } from "react";

// Datos iniciales del perfil
const initialProfileData = {
  nombre: "Juan",
  apellido: "Pérez",
  ciudad: "Ciudad de México",
  zonaPostal: 12345,
  email: "juan.perez@email.com",
  password: "",
  confirmPassword: "",
};

// Configuración de campos del formulario
const profileFields = [
  { id: "nombre", label: "Nombre", type: "text", icon: IconUser },
  { id: "apellido", label: "Apellido", type: "text", icon: IconUser },
  { id: "ciudad", label: "Ciudad", type: "text", icon: IconUser },
  { id: "zonaPostal", label: "Código Postal", type: "number", icon: IconUser },
  { id: "email", label: "Correo Electrónico", type: "email", icon: IconMail },
];

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(initialProfileData);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState("");

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSaveChanges = () => {
    if (profileData.password !== profileData.confirmPassword && isEditing) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    setError("");
    setIsEditing(false);
  };

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
    setError("");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Encabezado */}
      <div className="text-center sm:text-left mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800">Mi Perfil</h1>
        <p className="text-lg text-gray-600">
          Gestiona tu información personal y mantén tus datos actualizados.
        </p>
      </div>

      {/* Tarjeta */}
      <Card className="shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-50 px-6 py-4 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold">Información Personal</h2>
            <p className="text-sm text-gray-500">Cliente desde 2023</p>
          </div>
          <Button
            className="mt-4 sm:mt-0"
            onClick={handleEditToggle}
            color={isEditing ? "warning" : "primary"}
          >
            <IconEdit size={18} className="mr-2" />
            {isEditing ? "Cancelar" : "Editar Perfil"}
          </Button>
        </CardHeader>

        <CardBody className="px-6 py-8">
          {/* Campos del formulario */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileFields.map(({ id, label, type, icon: Icon }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium mb-2">
                  {label}
                </label>
                <Input
                  id={id}
                  type={type}
                  disabled={!isEditing}
                  onChange={handleChange}
                  placeholder={`Ingresa tu ${label.toLowerCase()}`}
                  startContent={<Icon size={20} className="text-gray-400" />}
                />
              </div>
            ))}

            {/* Campos de contraseña */}
            {["password", "confirmPassword"].map((field, index) => (
              <div key={index}>
                <label
                  htmlFor={field}
                  className="block text-sm font-medium mb-2"
                >
                  {field === "password" ? "Contraseña" : "Confirmar Contraseña"}
                </label>
                <Input
                  id={field}
                  type={isVisible ? "text" : "password"}
                  disabled={!isEditing}
                  onChange={handleChange}
                  placeholder={`Ingresa tu ${field === "password" ? "contraseña" : "confirmación de contraseña"}`}
                  startContent={
                    <IconLock size={20} className="text-gray-400" />
                  }
                  endContent={
                    <button
                      onClick={toggleVisibility}
                      aria-label="Toggle password visibility"
                    >
                      {isVisible ? (
                        <IconEyeOff
                          size={20}
                          className="pointer-events-none text-2xl text-gray-500"
                        />
                      ) : (
                        <IconEye
                          size={20}
                          className="pointer-events-none text-2xl text-gray-500"
                        />
                      )}
                    </button>
                  }
                />
              </div>
            ))}
          </div>

          {/* Mensaje de error */}
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

          {/* Botones de acción */}
          {isEditing && (
            <div className="flex justify-end gap-4 mt-6">
              <Button color="default" onClick={handleEditToggle}>
                Cancelar
              </Button>
              <Button color="success" onClick={handleSaveChanges}>
                Guardar Cambios
              </Button>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfilePage;
